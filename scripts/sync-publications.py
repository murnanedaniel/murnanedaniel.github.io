#!/usr/bin/env python3
"""Fetch publications from OpenAlex API and write to JSON data file."""

import json
import urllib.request
import urllib.parse
import sys
import os

AUTHOR_ID = "A5011421008"
ORCID = "0000-0003-4046-4822"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "..", "docs", "data", "publications.json")
API_BASE = "https://api.openalex.org"

def fetch_all_works():
    """Fetch all works for the author, handling pagination."""
    works = []
    page = 1
    per_page = 50

    while True:
        url = f"{API_BASE}/works?filter=author.id:{AUTHOR_ID}&sort=publication_date:desc&per_page={per_page}&page={page}&mailto=daniel.murnane@nbi.ku.dk"
        print(f"Fetching page {page}...")

        req = urllib.request.Request(url, headers={"User-Agent": "daniel-murnane-site/1.0"})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())

        results = data.get("results", [])
        if not results:
            break

        for work in results:
            authors = []
            for authorship in work.get("authorships", []):
                name = authorship.get("author", {}).get("display_name", "")
                if name:
                    authors.append(name)

            primary_loc = work.get("primary_location") or {}
            source = primary_loc.get("source") or {}

            oa = work.get("open_access") or {}

            pub = {
                "title": work.get("title", ""),
                "authors": authors,
                "date": work.get("publication_date", ""),
                "doi": work.get("doi", ""),
                "type": work.get("type", ""),
                "cited_by_count": work.get("cited_by_count", 0),
                "source": source.get("display_name", ""),
                "open_access_url": oa.get("oa_url"),
            }
            works.append(pub)

        meta = data.get("meta", {})
        total = meta.get("count", 0)
        if page * per_page >= total:
            break
        page += 1

    return works


def fetch_author_stats():
    """Fetch author-level stats."""
    url = f"{API_BASE}/authors/{AUTHOR_ID}?mailto=daniel.murnane@nbi.ku.dk"
    req = urllib.request.Request(url, headers={"User-Agent": "daniel-murnane-site/1.0"})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())

    return {
        "works_count": data.get("works_count", 0),
        "cited_by_count": data.get("cited_by_count", 0),
        "h_index": data.get("summary_stats", {}).get("h_index", 0),
        "i10_index": data.get("summary_stats", {}).get("i10_index", 0),
        "2yr_mean_citedness": data.get("summary_stats", {}).get("2yr_mean_citedness", 0),
    }


def main():
    print("Fetching publications from OpenAlex...")
    works = fetch_all_works()
    print(f"Found {len(works)} publications")

    print("Fetching author stats...")
    stats = fetch_author_stats()
    print(f"Stats: {stats}")

    output = {
        "author": {
            "name": "Daniel Murnane",
            "orcid": ORCID,
            "openalex_id": AUTHOR_ID,
            "stats": stats,
        },
        "publications": works,
        "last_updated": __import__("datetime").datetime.utcnow().isoformat() + "Z",
    }

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        json.dump(output, f, indent=2)

    print(f"Written {len(works)} publications to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
