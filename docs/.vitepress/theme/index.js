// Theme customizations
import './custom.css'

// Default theme
import DefaultTheme from 'vitepress/theme'

// Custom components
import ProposalV1 from './components/ProposalV1.vue'
import ProposalV2 from './components/ProposalV2.vue'
import ProposalV3 from './components/ProposalV3.vue'
import ProposalV4 from './components/ProposalV4.vue'
import ProposalV5 from './components/ProposalV5.vue'
import ProposalV6 from './components/ProposalV6.vue'
import ProposalV7 from './components/ProposalV7.vue'
import ProposalV8 from './components/ProposalV8.vue'
import ProposalV9 from './components/ProposalV9.vue'
import ProposalV10 from './components/ProposalV10.vue'
import LandingPageSwitcher from './components/LandingPageSwitcher.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Custom app enhancements
    app.component('ProposalV1', ProposalV1)
    app.component('ProposalV2', ProposalV2)
    app.component('ProposalV3', ProposalV3)
    app.component('ProposalV4', ProposalV4)
    app.component('ProposalV5', ProposalV5)
    app.component('ProposalV6', ProposalV6)
    app.component('ProposalV7', ProposalV7)
    app.component('ProposalV8', ProposalV8)
    app.component('ProposalV9', ProposalV9)
    app.component('ProposalV10', ProposalV10)
    app.component('LandingPageSwitcher', LandingPageSwitcher)
  }
} 