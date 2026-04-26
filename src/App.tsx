/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Palette, ExternalLink, X, ChevronRight, Globe, Github, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

type Language = 'zh' | 'en';

interface Project {
  id: number;
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  label: string;
  role: Record<Language, string>;
  industry: Record<Language, string>;
  image: string;
  gallery?: string[];
  challenge: Record<Language, string>;
  solution: Record<Language, string>;
  result: Record<Language, string>;
  categories: string[];
  detailedContent?: {
    vision?: Record<Language, string>;
    challenges?: Record<Language, string[]>;
    strategies?: Array<{
      title: Record<Language, string>;
      desc: Record<Language, string>;
    }>;
    impacts?: Record<Language, string[]>;
    reflection?: Record<Language, string>;
    expertQuote?: Record<Language, string>;
  };
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: { zh: 'UrMart 美好生活誌 (Blog 整合專案)', en: 'UrMart Life Blog Integration' },
    subtitle: { 
      zh: 'UrMart 內容增長引擎：以資訊架構優化實現 3.7 倍轉換的電商網誌重構',
      en: 'UrMart Content Growth Engine: E-commerce Blog Refactor Achieving 3.7x Conversion via IA Optimization'
    },
    label: '2023-2024',
    role: { zh: 'Product Designer/Product Owner', en: 'Product Designer/Product Owner' },
    industry: { zh: 'E-commerce / Health', en: 'E-commerce / Health' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/urmart/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/urmart/1.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/urmart/2.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/urmart/3.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/urmart/4.jpg'
    ],
    challenge: {
      zh: '健康食品電商的 Blog 缺乏結構，流量未轉化為銷售。',
      en: 'E-commerce blog lacked structure, failing to convert traffic into sales.'
    },
    solution: {
      zh: '優化資訊架構，追求「邏輯上的乾淨」與「檢索效率」。',
      en: 'Optimized IA for "logical clarity" and "retrieval efficiency".'
    },
    result: {
      zh: '實現 3.7 倍轉換重構，Organic 流量 ↑3%。',
      en: 'Achieved 3.7x conversion; Organic traffic increased by 3%.'
    },
    categories: ['E-commerce', 'IA Optimization', 'Conversion Growth'],
    detailedContent: {
      vision: {
        zh: 'UrMart 是台灣領先的垂直電商平台，專注於營養保健與運動補給。本專案的核心目標是將原本獨立於 WordPress 的「美好生活誌」內容生態系整合進電商本站，利用高品質的衛教文章（如營養師專欄、部落客推薦）精準引流，並將閱讀行為轉化為實質的購物決策。',
        en: 'UrMart is a leading vertical e-commerce platform in Taiwan, focusing on nutrition and sports supplements. The core goal of this project was to integrate the "Life Blog" content ecosystem, originally independent on WordPress, into the main e-commerce site, using high-quality educational articles to precisely attract traffic and convert reading behavior into purchase decisions.'
      },
      challenges: {
        zh: [
          '資訊超載與轉化斷點：如何在不破壞閱讀體驗的前提下，引導使用者從「獲取知識」跨越到「下單購買」。',
          '異質系統整合：解決 WordPress 舊文章與電商架構間的層級衝突，確保 SEO 自然流量能穩定留存於本站。',
          '數據驅動的佈局決策：在資源有限的開發衝刺中，找出對轉換率影響最顯著的資訊展示結構。'
        ],
        en: [
          'Information overload and conversion gaps: Guiding users from knowledge acquisition to purchase without breaking the experience.',
          'Heterogeneous system integration: Resolving hierarchy conflicts between old WordPress posts and the e-commerce structure.',
          'Data-driven layout decisions: Identifying the information structures with the most significant impact on conversion during limited dev sprints.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 資訊層級的「減法工程」與卡片化佈局', en: '1. Information Hierarchy "Subtraction Engineering" & Card Layout' },
          desc: { 
            zh: '採用結構化的卡片式佈局 (Card UI)，將標題、摘要與分類標籤進行統一模組化處理。透過「閱讀更多」的收納機制維持視覺留白，有效降低使用者的認知負擔。', 
            en: 'Unified modular headings, summaries, and tags using Card UI. Used "Read More" mechanisms to preserve white space and reduce cognitive load.' 
          }
        },
        {
          title: { zh: '2. 建立高效檢索的標籤與導航系統', en: '2. High-Efficiency Tagging and Navigation' },
          desc: { 
            zh: '設計嚴密的標籤系統 (Tags) 與下拉式分類選單，優化行動端底部導航列 (Bottom Nav)，讓核心功能始終處於「拇指區」。', 
            en: 'Designed strict tag systems and dropdown menus, optimizing mobile Bottom Nav to keep core functions in the "thumb zone".' 
          }
        },
        {
          title: { zh: '3. 技術型 SEO 與 RAG 資料結構重塑', en: '3. Technical SEO & Data Restructuring' },
          desc: { 
            zh: '主導 Schema.org 結構化資料整理與 Sitemap 佈建，解決無限滾動 (Infinite Scroll) 的爬蟲問題，確保文章內容被精準索引。', 
            en: 'Led Schema.org structured data organization and Sitemap deployment, solving Infinite Scroll crawler issues for precise indexing.' 
          }
        }
      ],
      impacts: {
        zh: [
          '**轉化率飛躍**：目標轉換率成功提升至 3.7 倍。',
          '**自然增長穩定**：帶來 3% 的 Organic Search 流量，並持續優化評分參與率。',
          '**流程 SOP 化**：建立包含 GA4 事件埋設、A/B Test 驗證到交付 RD 的標準作業程序。'
        ],
        en: [
          '**Conversion Leap**: Targeted conversion rate successfully increased to 3.7x.',
          '**Stable Growth**: Brought in 3% Organic Search traffic with continuous optimization.',
          '**SOP established**: Created procedures for GA4 event tracking, A/B Testing, and handoff.'
        ]
      },
      expertQuote: { 
        zh: '「這不只是一次介面翻新，更是一次對『內容行銷邏輯』的架構重組。」',
        en: '"This wasn\'t just a UI refresh; it was an architectural reorganization of content marketing logic."'
      },
      reflection: {
        zh: '在 UrMart 的經歷證明了我的設計哲學：設計應作為解決商業痛點的「規則」。透過數據回饋與技術同理心，我能確保每一個視覺變動都能直接回饋到業務增長與系統穩定度上。',
        en: 'My experience at UrMart proved my design philosophy: design serves as the "rules" to solve business pain points. Through defensive design and technical empathy, I ensure visual changes directly contribute to growth and stability.'
      }
    }
  },
  {
    id: 1,
    title: { zh: 'TAG（AI 導覽助理)', en: 'TAG AI Assistant' },
    subtitle: {
      zh: '從實驗性 Demo 到商用 SaaS 的產品化重生',
      en: 'From Experimental Demo to Commercial SaaS: A Productization Rebirth'
    },
    label: '2026',
    role: { zh: 'Product Designer/Product Owner', en: 'Product Designer/Product Owner' },
    industry: { zh: 'AI / AR', en: 'AI / AR' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/tag/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/tag/1.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/tag/2.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/tag/3.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/tag/4.jpg'
    ],
    challenge: {
      zh: '【專案核心： 產品化重生與價值重構】 針對「定位誤判」與「辨識失準」等影響商用的核心技術失效進行精準止血，並同步透過桌面調研（Desktop Research）跨越「一次性專案」的商業斷層。在資源極限下，利用「行為設計」補位硬體技術缺陷，將單純的技術展示轉譯為具備長遠營運價值的 B2B 數位資產，定義可持續優化的產品架構',
      en: '[Core: Productization & Value Restructuring] Addressing core tech failures like positioning errors and bridging the commercial gap from "one-off projects" via Desktop Research. Using behavioral design to offset hardware limits, transforming tech demos into long-term B2B digital assets.'
    },
    solution: {
      zh: '執行「產品化 (Productization)」的重生。在資源受限與技術邊界的雙重夾擊下，重新定義系統運行規則，將零散功能重塑為具備數據資產價值的商用產品架構',
      en: 'Executed productization rebirth. Redefined system rules under resource and tech constraints, reshaping fragmented features into a commercial product architecture.'
    },
    result: {
      zh: '成功將基礎定位穩定性推升至預期 ≥ 95%，並確立可規模化的 產品框架（如信心評分機制、定位提示優化）。產品價值從「功能導覽」成功躍升為「數據化策展」的關鍵基礎。',
      en: 'Pushed positioning stability to ≥ 95%, establishing scalable frameworks (e.g., confidence scoring). Shifted product value from simple navigation to data-driven curation.'
    },
    categories: ['SaaS', 'User Research', 'Interface Design'],
    detailedContent: {
      vision: {
        zh: 'TAG 是一款基於「純視覺 VPS」技術的空間感知助理，具備 Markerless（免硬體標籤）的核心競爭力，無需佈建 Beacon 即可精準導覽。我接手後擔任 PO，核心願景是將其從「功能集合」重塑為具備互動感與商業靈魂的 App 產品。我們追求的是 「問得到、找得到、走得到」 的高階互動，並透過持續性的架構優化，讓產品能隨場域數據自我迭代。',
        en: 'TAG is a spatial awareness assistant based on "Visual VPS", featuring Markerless capability. As PO, my vision was to reshape it from a feature set into an interactive App with a commercial soul, aiming for high-level interaction and self-iterating architectures.'
      },
      challenges: {
        zh: [
          '技術失效帶來的信任危機：系統受限於每 0.5 秒抓取影像。旋轉過快會導致定位錯誤（跨樓層誤判）或物體辨識受環境光影干擾而失效。',
          '營運與商業價值的模糊：早期產品缺乏後續增長動能。在人力短缺下，我必須透過桌面調研（Desktop Research）定義產品的高價值方向，思考如何從「解決問題」轉向「創造營運紅利」。',
          '資源與時程的生存策略：面對編制缺失兩人且底層技術無法變動的現實，必須在產品層級尋求「成本最低、效益最高」的止血與優化方案。'
        ],
        en: [
          'Trust crisis from tech failure: System limited to 0.5s capture. Fast rotation leads to positioning errors or object recognition failure due to lighting.',
          'Ambiguous operational value: Early products lacked growth momentum. Used Desktop Research to define high-value directions, shifting from "problem solving" to "dividend creation".',
          'Survival strategy under resource limits: With staffing shortages and unchangeable tech, sought low-cost/high-efficiency UI solutions.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 引導式操作解決定位錯誤 (Behavioral Guidance)', en: '1. Behavioral Guidance' },
          desc: { 
            zh: '主導開發「穩定性採樣 UI」。透過水平儀與進度條強制規範使用者旋轉速度與角度，從操作源頭確保高品質數據，大幅降低無效採樣率。', 
            en: 'Developed "Stability Sampling UI" with levels and bars to force steady scanning from the source, reducing invalid sampling.' 
          }
        },
        {
          title: { zh: '2. 診斷式回饋提升辨識精準度 (Diagnostic Feedback)', en: '2. Diagnostic Feedback' },
          desc: { 
            zh: '引入「動態 Pill 狀態機介面」，將靜態提示轉化為具備脈衝動畫的即時回饋（如：「請緩慢移動」）。消除了使用者的操作斷點。', 
            en: 'Introduced "Dynamic Pill State Machine" with pulse animations for real-time feedback, eliminating user operation gaps.' 
          }
        },
        {
          title: { zh: '3. 定義三段式辨識分流邏輯 (Triage Logic)', en: '3. Triage Logic' },
          desc: { 
            zh: '這是對抗辨識錯誤的核心決策防線：>90% 自動命中；80-90% 輔助決策（人手動確認） <80% 行為矯正。這確保了產出結果的絕對正確。', 
            en: 'Core decision line: >90% Auto-trigger; 80-90% Manual confirmation; <80% Behavior correction, ensuring absolute accuracy.' 
          }
        },
        {
          title: { zh: '4. 持續性優化路徑：數據資產化規劃 (Future-proof Research)', en: '4. Future-proof Research' },
          desc: { 
            zh: '透過調研定義「數據化策展」路徑。規劃了「Session 續傳流程」與「信心評分機制」，將提問紀錄與停留動線轉化為「場域健檢報告」。', 
            en: 'Defined "Data Curation" paths. Planned Session resumption and Confidence Scoring to turn records into "Site Health Reports".' 
          }
        }
      ],
      impacts: {
        zh: [
          '**確立商用門檻與交付標竿**：透過邏輯優化將基礎定位成功率推申至預期 ≥ 95%，成功從技術 Demo 轉型為具備商業戰鬥力的產品原型。'
        ],
        en: [
          '**Commercial Benchmarking**: Pushed localization success rate to ≥ 95% via logic optimization, transforming a demo into a commercial prototype.'
        ]
      },
      expertQuote: { 
        zh: '「身為 PO，我的專業在於資源極限下的『生存決策』與『價值預判』。」',
        en: '"As a PO, my expertise lies in \'survival decision-making\' and \'value anticipation\' under resource limits."'
      },
      reflection: {
        zh: '接手 TAG 時，我面對的是少兩個人力且技術債累積的現狀。我深刻體認到，資深產品人的價值在於「帶著答案解決問題」。我不只是修補定位錯誤，更是透過 Desktop Research 錨定產品在國際市場的座標。在無法更動底層架構的情況下，我堅持推行「1 小時工時即可提升 50% 體感」的替代方案。TAG 的重生證明了：有了嚴密的邏輯與戰略視野，技術限制就不再是終點，而是產品優化的新起點。',
        en: 'Taking over TAG with staffing shortages and technical debt, I realized a senior product person\'s value lies in "solving problems with answers." I anchored the product globally via Desktop Research. TAG\'s rebirth proves that with rigorous logic, technical limits become starting points for optimization.'
      }
    }
  },
  {
    id: 4,
    title: { zh: 'AI WAVE：沉浸式電子簽章互動架構設計', en: 'AI WAVE: Immersive E-Signature Interaction Architecture' },
    subtitle: {
      zh: '將硬核技術轉化為感官故事：AI WAVE SHOW 2025 電子簽章互動專案',
      en: 'Translating Hardcore Tech into Sensory Stories: AI WAVE SHOW 2025 E-Signature Interaction'
    },
    label: '2025',
    role: { zh: 'Interaction Designer', en: 'Interaction Designer' },
    industry: { zh: 'Event Tech / Immersive', en: 'Event Tech / Immersive' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/wave/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/wave/1.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/wave/2.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/wave/3.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/wave/4.jpg'
    ],
    challenge: {
      zh: '將枯燥的電子簽章技術轉化為故事感的沉浸式體驗，解決手持裝置與大型 L 型牆面間的跨媒介連動。',
      en: 'Translating dry e-signature tech into a sensory story, resolving cross-media syncing between mobile and L-wall.'
    },
    solution: {
      zh: '主導「沉浸式腳本」規劃，將簽章轉譯為故故事場景，定義跨媒介即時連動架構。',
      en: 'Led "Immersive Scripting" to translate signatures into story scenes, defining real-time cross-media syncing.'
    },
    result: {
      zh: '打造展會核心亮點，吸引大量參與人潮，精準傳達 AI 與永續價值。',
      en: 'Created a show highlight attracting crowds and precisely communicating AI and sustainability values.'
    },
    categories: ['Interaction Design', 'Immersive Experience', 'Cross-media'],
    detailedContent: {
      vision: {
        zh: '本專案為台北市電腦公會 (TCA) 於 AI WAVE SHOW 2025 量身打造。核心願景在於打破大眾對「電子簽章」作為單純數位工具的刻板印象，透過 AI 技術與沉浸式設計的整合，將其轉化為一場「直觀體驗未來智慧生活」的感官盛宴，展現科技在遠距應用與永續發展上的無限潛力。',
        en: 'Designed for TCA at AI WAVE SHOW 2025. The vision was to break the stereotype of e-signatures as mere digital tools, integrating AI and immersive design into a "Sensory Feast of Future Smart Life."'
      },
      challenges: {
        zh: [
          '技術與感官的斷層：電子簽章本質上是高度理性的技術流程，難以在展覽場域中產生視覺震撼力與情感共鳴。',
          '跨媒介互動的同步性：需在複雜的展場環境中，確保個人觸控裝置上的簽章動作，能與 L 型大型互動牆面達成零延遲且視覺連貫的即時反饋。',
          '高流量下的引導效率：必須在極短的時間內，讓非技術背景的觀眾完成從「理解場景」到「執行簽章」的複雜互動流程。'
        ],
        en: [
          'Gap between tech and senses: E-signature is a highly rational tech process, difficult to generate visual impact and emotional resonance in an exhibition.',
          'Cross-media synchronization: Ensuring zero-latency and visual continuity between personal mobile devices and large L-shaped interactive walls.',
          'Guidance efficiency under high traffic: Allowing non-technical audiences to complete complex interaction from "understanding" to "signing" in a very short time.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 腳本導向的技術轉譯', en: '1. Script-driven Translation' },
          desc: { 
            zh: '捨棄功能導向的說明，改以沉浸式腳本設計讓觀眾融入故事情境，將電子簽章定義為「開啟未來體驗」的啟動鍵。', 
            en: 'Replaced function-led explanations with immersive scripts, defining e-signature as the "activation key" for future experiences.' 
          }
        },
        {
          title: { zh: '2. 跨媒介連動互動架構', en: '2. Cross-media Architecture' },
          desc: { 
            zh: '定義個人裝置與 L 型牆面的映射邏輯，讓小螢幕的輸入轉化為大螢幕的震撼擴散，強化操作的「成就感」與「力量感」。', 
            en: 'Defined mapping logic between mobile and L-wall, transforming small inputs into large-scale visual impact to enhance "achievement."' 
          }
        },
        {
          title: { zh: '3. 低認知負擔的直覺 UX', en: '3. Intuitive UX with Low Cognitive Load' },
          desc: { 
            zh: '簡化電子簽章的技術門檻，規劃「拿起即操作、操作即回饋」的零死角流程，確保互動感倍增且不失專業度。', 
            en: 'Simplified technical barriers with a "pick up and play" flow, ensuring doubled interaction without losing professionalism.' 
          }
        },
        {
          title: { zh: '4. 視覺規模的沉浸式佈局', en: '4. Immersive Layout on Visual Scale' },
          desc: { 
            zh: '利用 L 型牆面的空間特性，設計具備環繞感的視覺特效，讓觀眾在簽署的瞬間感受技術如何滲透並賦能智慧生活。', 
            en: 'Leveraged L-wall spatial traits for wraparound visual effects, letting users feel how tech empowers smart life the moment they sign.' 
          }
        }
      ],
      impacts: {
        zh: [
          '**品牌價值的可視化**：成功傳達 AI 整合創新的理念，將抽象智慧生活願景轉化為民眾可感知的科技魅力。',
          '**展會人氣引擎**：以強烈視覺震撼成為展場亮點，為展區穩定導入大量人潮，顯著提升曝光量。',
          '**智慧生活教育**：讓觀眾獲在愉悅氛圍中理解電子簽章對環境永續（無紙化）與遠距協作的重要性。'
        ],
        en: [
          '**Visualizing Brand Value**: Successfully conveyed AI innovation, turning abstract visions into tangible tech charm.',
          '**Show Traffic Engine**: Became a highlight with strong visual impact, consistently importing crowds to the area.',
          '**Smart Life Education**: Helped audiences understand the importance of e-signatures for sustainability (paperless) and remote collaboration.'
        ]
      },
      expertQuote: { 
        zh: '「這不僅是技術的展示，更是對『信任感』的視覺化轉譯。」',
        en: '"This is not just a display of technology, but a visual translation of \'trust\'."'
      },
      reflection: {
        zh: '這場互動設計證明了：當技術隱藏在直覺的感官回饋之後，它才真正具備了打動人心的力量。我在專案中堅持的跨媒介連動與腳本思維，成功將電子簽章這一生硬行為，重塑為一場「與未來簽約」的神聖儀式感。',
        en: 'This interaction design proved that when technology is hidden behind intuitive sensory feedback, it truly has the power to touch hearts.'
      }
    }
  },
  {
    id: 3,
    title: { zh: '客家互動餐桌', en: 'Hakka Interactive Table' },
    subtitle: {
      zh: '互動永續餐桌：將「影視彩蛋」轉譯為職人感互動體驗',
      en: 'Interactive Table: Translating "TV Easter Eggs" into Professional Interaction'
    },
    label: '2025',
    role: { zh: 'UI/UX Designer', en: 'UI/UX Designer' },
    industry: { zh: 'Cultural Tech / Gaming', en: 'Cultural Tech / Gaming' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/hakka/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/hakka/1.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/hakka/2.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/hakka/3.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/hakka/4.jpg'
    ],
    challenge: {
      zh: '將抽象的「食物永續理念」與「客韓料理特色」轉化為大人小孩都易於上手的數位互動體驗，解決枯燥感。',
      en: 'Translating "Sustainable Food" and "Hakka-Korean Cuisine" into an easy-to-use digital experience.'
    },
    solution: {
      zh: '規劃具備「職人感」的 Multi-touch 互動手勢與操作劇本，將影視內容產品化為數位遊戲流程。',
      en: 'Planned "Professional" Multi-touch gestures and scripts to productize TV content into digital workflows.'
    },
    result: {
      zh: '成功將影視彩蛋與互動科技結合，有效吸引眾多粉絲打卡參與，協助建立節目強烈情感連結。',
      en: 'Successfully combined TV easter eggs with tech, attracting fans and establishing strong emotional bonds.'
    },
    categories: ['Game Design', 'Cultural Tech', 'Table Interaction'],
    detailedContent: {
      vision: {
        zh: '本專案為客家電視台《廚師的迫降：客家廚房2》貨櫃屋特展量身打造。願景在於透過「互動科技」將節目中蘊含的「食物永續理念」落地為直覺的感官體驗。目標是讓粉絲在快閃貨櫃屋中，能「近距離」與節目場景互動，進而深化對 IP 品牌的認同感。',
        en: 'Custom-made for Hakka TV "Chef Landing: Hakka Kitchen 2". The vision was to ground "Food Sustainability" concepts into intuitive sensory experiences, deepening IP brand identification through close-range interaction.'
      },
      challenges: {
        zh: [
          '複雜動作的數位化轉譯：烹飪動作涉及細微手部操作，如何在螢幕上還原並簡化上手難度是核心難題。',
          '硬體空間的限制：在貨櫃屋有限空間內，流程必須直覺流暢，確保人潮不阻塞並維持教育意義。',
          '品牌價值的無縫整合：在數位遊戲中隱性植入「永續理念」，讓觀眾在「玩」的過程中自然吸收。'
        ],
        en: [
          'Digital translation of complex actions: Restoring fine hand movements like chopping on screen simply was key.',
          'Hardware space constraints: In limited container space, flows must be intuitive to avoid crowding.',
          'Seamless brand value integration: Implicitly embedding "Sustainability" so users learn through play.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 「職人感」玩法開發', en: '1. "Professional" Gameplay' },
          desc: { 
            zh: '針對曬柿餅、做粄條等核心動作定義專屬互動邏輯，讓操作具備模擬實體動作的「手感」。', 
            en: 'Defined logic for core actions like drying persimmons, giving operations a simulated "tactile" feel.' 
          }
        },
        {
          title: { zh: '2. 烹飪流程的「產品化」轉型', en: '2. Productizing Cooking Workflows' },
          desc: { 
            zh: '將繁瑣的客韓料理步驟模組化，轉化為易於理解的數位互動單元，使理念快速擴散。', 
            en: 'Modularized complex steps into easy digital units, allowing rapid spread of culinary philosophies.' 
          }
        },
        {
          title: { zh: '3. 虛實整合的視覺反饋', en: '3. Virtual-Physical Visual Feedback' },
          desc: { 
            zh: '結合節目主題色與彩蛋，營造沉浸感，讓數位內容與實體貨櫃屋設計完美融合。', 
            en: 'Combined show colors and easter eggs to create immersion, merging digital content with physical design.' 
          }
        }
      ],
      impacts: {
        zh: [
          '**深化 IP 情感連結**：有效縮短影視內容與受眾距離，加深粉絲凝聚力。',
          '**精準的口碑行銷**：吸引參觀者自發分享，成為活動亮點，成功推廣知名度。',
          '**永續價值的感官教育化**：將理念產品化，讓參與者深入認識客家飲食文化，提升推廣效率。'
        ],
        en: [
          '**Deepen IP Emotional Bonds**: Reduced distance between content and audience, boosting cohesion.',
          '**Precise Word-of-Mouth Marketing**: Attracted spontaneous shares, becoming a highlight of the event.',
          '**Educational Sustainability**: Productized concepts, enhancing the efficiency of cultural promotion.'
        ]
      },
      expertQuote: { 
        zh: '「最好的技術轉譯，是讓觀眾在忘記技術存在的同時，深刻記住故事的溫度。」',
        en: '"The best technical translation is making the audience forget the technology while deeply remembering the warmth of the story."'
      },
      reflection: {
        zh: '關鍵不在於聲光特效的華麗度，而在於如何精準捕捉「最有感的互動」，甚至聽說有小朋友玩到不想回家。透過定義「職人手勢」與「遊玩腳本」，我成功將節目的靈魂延伸到指尖。',
        en: 'The key is precisely capturing the "most felt interaction" rather than flashy effects. By defining professional gestures and scripts, I extended the soul of the show to the fingertips.'
      }
    }
  },
  {
    id: 5,
    title: { zh: '新進能源 (ATE JP)', en: 'ATE JP' },
    subtitle: {
      zh: '以「Variables 自動化系統」驅動 16 天極速交付，重塑 B2B 全球化信賴感',
      en: 'Driving 16-Day Rapid Delivery with Variables Automation, Reshaping Global B2B Trust'
    },
    label: '2026',
    role: { zh: 'UI/UX Designer', en: 'UI/UX Designer' },
    industry: { zh: 'Energy Tech / B2B Industrial', en: 'Energy Tech / B2B Industrial' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/ate/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/ate/1.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/ate/2.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/ate/3.jpg',
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/ate/4.jpg'
    ],
    challenge: {
      zh: '需在 16 天內從零打造符合日本網域（.jp）高標美學的 B2B 網站，並克服資訊破碎與語系衝突壓力。',
      en: 'Building a .jp B2B platform in 16 days while handling fragmented info and multilingual layout conflicts.'
    },
    solution: {
      zh: '建立高度自動化的設計系統與 Variables，搭配模組化圖文轉換系統，落實資訊結構化管理。',
      en: 'Established automated design systems and Variables with modular content engines for structured management.'
    },
    result: {
      zh: '在極短時間交付全站設計，優化成日系排版間距，協助建立能源安全與數據透明的專業信賴感。',
      en: 'Delivered full site in 16 days, optimized Japanese-style layout spacing, and established professional brand trust.'
    },
    categories: ['B2B SaaS', 'Global Design', 'Industrial IA'],
    detailedContent: {
      vision: {
        zh: '新進能源 (ATE JP) 致力於大規模儲能與 EMS 系統開發。本專案願景是在日本 B2B 市場中建立「專業、信賴、全球化」的品牌窗口。目標是將生硬的能源技術資訊轉化為具備「數據透明感」的數位體驗，讓潛在合作夥伴能在最短時間內掌握 ATE 的技術領先地位與全球佈局優勢。',
        en: 'ATE JP focuses on large-scale energy storage and EMS systems. The vision was to establish a professional, trustworthy, and global brand portal in the Japanese B2B market, transforming technical data into a transparent digital experience.'
      },
      challenges: {
        zh: [
          '資訊變動率與破碎化：客戶端素材初期不穩定，傳統設計流程難以應付 16 天內頻繁的圖文改稿需求。',
          '日系品質的嚴苛標竿：日本 B2B 市場對於視覺嚴謹度（如 0.5pt 細線、精準留白）有極高要求。',
          '多語語系技術難點：中、日、英三種語言字串長度與圖片對應關係極其複雜。'
        ],
        en: [
          'High information volatility: Unstable initial assets made frequent revisions difficult within a 16-day window.',
          'Strict Japanese quality standards: High demand for visual precision (e.g., 0.5pt lines, precise whitespace) in B2B markets.',
          'Multilingual technical complexity: Conflict between traditional layouts and Chinese/Japanese/English string lengths.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 結構化 Gallery 套版與規則定義', en: '1. Structured Gallery Framework' },
          desc: { 
            zh: '規劃「Gallery 內容引擎」，建立 Component Sets 實現「素材丟入即自動生成符合比例頁面」的高效流程。', 
            en: 'Designed a "Gallery Content Engine" with component sets for automated, proportional layout generation.' 
          }
        },
        {
          title: { zh: '2. 數據降維與「卡片化佈局」', en: '2. Data Reduction & Card Layout' },
          desc: { 
            zh: '針對複雜的儲能工業數據，採用模組化卡片設計並運用「Hero Numbers」突顯關鍵實績，確保留白感。', 
            en: 'Applied modular card designs and "Hero Numbers" to highlight industrial data while maintaining visual breathing room.' 
          }
        },
        {
          title: { zh: '3. 自動化多語系 Variable 系統', en: '3. Automated Multilingual Variables' },
          desc: { 
            zh: '利用 Figma Variables 建立字串變數與組件連動，實現單一開關即可自動切換全站內容，解決語系衝突。', 
            en: 'Leveraged Figma Variables for strings and components, enabling one-click total site translation for all languages.' 
          }
        },
        {
          title: { zh: '4. 日系極簡視覺標準導入', en: '4. Japanese Minimalist Standards' },
          desc: { 
            zh: '定義 「莫蘭迪色系 (#6185B0)」 與 0.5pt 極細線條，搭配 160px 的精準大面積留白，落實市場高標美學。', 
            en: 'Defined Morandi color schemes (#6185B0) and 0.5pt lines with 160px whitespace for high-standard aesthetics.' 
          }
        },
        {
          title: { zh: '5. 全方位的資訊架構 (IA) 規劃', en: '5. Comprehensive IA Planning' },
          desc: { 
            zh: '從 TOP 首頁到產品分頁，完整定義「圖 + 文字」的內容層級，透過優化 User Journey 提升轉化率。', 
            en: 'Defined clear content hierarchies from the homepage to product pages, optimizing user journeys for conversion.' 
          }
        },
        {
          title: { zh: '6. 防禦性設計與預期管理', en: '6. Defensive Design & Expectation Management' },
          desc: { 
            zh: '在極限壓力下劃定「止血點」，運用專業溝通保護開發穩定性，並產出「UIUX 工作說明書」確保維護效能。', 
            en: 'Set "cutoff points" under pressure to protect dev stability and produced a "UIUX Handbook" for maintenance.' 
          }
        }
      ],
      impacts: {
        zh: [
          '**確立 B2B 品牌國際高度**：協助客戶在日本市場建立信賴感門面，達成多項海外導入案例。',
          '**極大化研發維護效能**：自動化流程減少了後續多語系維護 50% 的重複勞動。',
          '**精準的在地化市場信任**：細節處理（如日文字體行高預留）有效提升國際商機轉化潛力。'
        ],
        en: [
          '**Global B2B Branding**: Established a high-trust digital portal leading to multiple overseas implementation cases.',
          '**Maximized R&D Efficiency**: Automated workflows reduced repetitive multilingual maintenance by 50%.',
          '**Localized Market Trust**: Precise details like font line-heights met Japanese standards, improving conversion potential.'
        ]
      },
      expertQuote: { 
        zh: '「設計師的價值不在於繪圖，而在於對『規則』的定義能力。」',
        en: '"A designer\'s value lies not in drawing, but in the ability to define \'rules\'."'
      },
      reflection: {
        zh: '這場 16 天的攻防戰證明了：在極限時間內，系統化設計思維才是保證品質與速度的唯一解。我交付給客戶的不只是網頁，而是一套可以快速應變市場變動的數位品牌資產庫。',
        en: 'This 16-day project proved that systematic design is the only solution for quality and speed under extreme pressure.'
      }
    }
  },
  {
    id: 2,
    title: { zh: 'Kiosk Horizon（AI導覽大螢幕機）', en: 'Kiosk Horizon Large Screen' },
    subtitle: {
      zh: '打破大型螢幕的操作斷層',
      en: 'Breaking the interaction gap on large-scale screens'
    },
    label: '2026',
    role: { zh: 'Product Designer', en: 'Product Designer' },
    industry: { zh: 'DOOH / Kiosk', en: 'DOOH / Kiosk' },
    image: 'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/kiosk/1.jpg',
    gallery: [
      'https://raw.githubusercontent.com/fezauiux/portfolio-site/main/gallery_image/kiosk/1.jpg'
    ],
    challenge: {
      zh: '在 55-75 吋大型壁掛觸控螢幕的物理限制下，使用者面臨嚴重的視覺隧道效應（只能看見螢幕 20-30% 的內容）與操作疲勞。傳統導覽機常被視為被動接收窗口，導致互動率低下。',
      en: 'Users face visual tunnel syndrome and fatigue on 55-75" touchscreens. Traditional kiosks are passive, leading to low engagement in busy venues.'
    },
    solution: {
      zh: '採用「區域化架構」，將 AI 助理作為視覺誘餌與引導，確保操作點皆在成人可及範圍，並將 QR Code 定義為「帶走資產」的任務終點。',
      en: 'Implemented "Zonal Architecture" using AI assistants for guidance, ensuring ergonomic operation and positioning QR codes as "asset retrieval" tasks.'
    },
    result: {
      zh: '成功建立適用於多場域的 SaaS 通用型導覽規範。AI 助理有效縮短尋位時間，並成功將線下流量轉化為數位資產留存。',
      en: 'Established a universal SaaS standard for various venues. AI assistants reduced search time and successfully converted offline traffic into digital assets.'
    },
    categories: ['Interaction Architecture', 'DOOH UI', 'SaaS'],
    detailedContent: {
      vision: {
        zh: "L'AiR 的核心願景是「讓所有人建立發布與獲取數位資產的習慣」。Kiosk Horizon 作為大型實體觸點，目標是解決數位與實體的斷裂，建立通用且模組化的導航框架，解決空間導航的痛點並提升場域商轉效率。",
        en: "L'AiR aims to foster habits of publishing and acquiring digital assets. Kiosk Horizon bridges the digital-physical gap, providing a modular framework for large-scale spatial navigation and operational efficiency."
      },
      challenges: {
        zh: [
          '物理性操作斷層：螢幕尺寸極大造成使用者必須頻繁橫向移動，甚至墊腳才能操作。',
          '心智模型衝突：需在維持底層架構限制下，設計符合大螢幕流暢感的交互體驗。',
          '社交壓力：使用者排斥在公共場合過久操作或進行可能顯得笨拙的語音對話。',
          '內容命名混亂：外部來源內容名稱長短不一，導致固定寬度 UI 容易跑版。'
        ],
        en: [
          'Physical interaction gap: Extreme screen size requires excessive lateral movement or high reach.',
          'Mental model conflict: Designing fluid interactions within rigid underlying architecture constraints.',
          'Social pressure: Users avoid public interactions that feel long or awkward, especially voice commands.',
          'Content chaos: Inconsistent naming from external sources causing UI layout breakages.'
        ]
      },
      strategies: [
        {
          title: { zh: '1. 三段式分欄與黃金操作帶', en: '1. Zonal Layout & Interaction Belt' },
          desc: { 
            zh: '採 70/30 佈局，將關鍵組件鎖定在螢幕左側，並保持在離地 100cm 以上的高度以符合人體工學。', 
            en: 'Used a 70/30 split, locking key components to the left and keeping them above 100cm for ergonomics.' 
          }
        },
        {
          title: { zh: '2. 擬人化主動引導', en: '2. Personified Active Guidance' },
          desc: { 
            zh: '將 AI 助理定位為「主動導覽員」，利用動態 Avatar 吸引路人，並輔以問答按鈕降低操作門檻。', 
            en: 'Positioned the AI assistant as an active guide, using dynamic avatars to attract attention and lower entry barriers.' 
          }
        },
        {
          title: { zh: '3. 零遮擋收音 UI 與聚焦設計', en: '3. Unobstructed Voice UI & Focus Design' },
          desc: { 
            zh: '設計軟性 Disable 與文字動態顯示，讓使用者在語音輸入時能「看圖說話」，減少操作斷點。', 
            en: 'Designed flexible state transitions and real-time text feedback to allow users to interact while viewing content.' 
          }
        },
        {
          title: { zh: '4. 資產清單式轉換', en: '4. Asset-based Conversion' },
          desc: { 
            zh: '強調 QR Code 的「數位資產」屬性，讓 Kiosk 成為手機端習慣養成的起點。', 
            en: 'Framed QR codes as "Digital Assets," making the Kiosk the starting point for mobile habit formation.' 
          }
        }
      ],
      impacts: {
        zh: [
          '**降低銷售阻力**：通用模板減少業務解釋成本，保證各類場域皆能維持人體工學標準。',
          '**轉換率提升**：轉化 QR Code 為資產導向，協助業主累積顧客數位足跡。',
          '**營運效率優化**：AI 助理處理 80% 重複性問答，節省場域人力成本。'
        ],
        en: [
          '**Reduced Sales Resistance**: Universal templates ensured ergonomic standards across all venues, lowering sales overhead.',
          '**Conversion Uplift**: Transformed QR codes into asset-driven actions, helping owners collect customer footprints.',
          '**Operational Optimization**: AI assistants handled 80% of repetitive Q&A, saving significant labor costs.'
        ]
      },
      reflection: {
        zh: '從 Horizon 的開發中，我體認到設計師必須是技術限制與商業願景的翻譯官。最有效的策略不是對抗限制，而是「降維設計」。證明了「吸引力」與「效率」在大螢幕上是同樣重要的商業指標。',
        en: 'Horizon taught me that designers are translators between tech limits and business visions. The most effective strategy is often "Simplified Design"—turning navigation into alignment and complex functions into modules.'
      }
    }
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const transformRef = useRef<any>(null);

  // 3. 切換圖片或專案時重設縮放
  useEffect(() => {
    transformRef.current?.resetTransform(0); // 0 = 立即重設，不動畫
  }, [activeImageIdx, selectedProject?.id]);

  const t = {
    hero: {
      title: lang === 'zh' ? <>設計 <em>讓人想用</em> 的產品</> : <>Designing Products <em>People Love</em> to Use</>,
      desc: lang === 'zh' 
        ? "產品設計師，專注於 0→1 產品定義與複雜邏輯轉譯。深耕 SaaS 平台、AI Product builder。用數據和用戶研究解決問題，用設計系統加速迭代。支持遠端協作。"
        : "Product Designer focused on 0→1 product definition and complex logic translation. Deep expertise in SaaS and AI Product builder. Solving problems through data and user research. Supports remote collaboration.",
    },
    nav: {
      work: lang === 'zh' ? '作品' : 'Work',
      skills: lang === 'zh' ? '技能' : 'Skills',
      about: lang === 'zh' ? '關於' : 'About',
      contact: lang === 'zh' ? '聯繫' : 'Contact',
    },
    about: {
      title: lang === 'zh' ? '關於' : 'About',
      p1: lang === 'zh' 
        ? "羽 是我 Feza 也是我"
        : "Yu is me, Feza is also me",
      subtitle: lang === 'zh'
        ? "往 Product builder 的方向邁進"
        : "Moving towards becoming a Product Builder",
      p2: lang === 'zh'
        ? "各種遊戲玩了十幾年，到現在還沒停，玩久了就成了最挑剔的那種使用者。"
        : "I've been playing various games for over a decade and haven't stopped; playing for so long has made me the most discerning type of user.",
      p3: lang === 'zh'
        ? "平常喜歡觀察各種表達方式，也喜歡去看展——當代藝術、互動裝置、博物館都去。"
        : "I enjoy observing different forms of expression and visiting exhibitions—contemporary art, interactive installations, and museums are all on my list.",
      footer: lang === 'zh'
        ? "歡迎交流你也愛玩的遊戲或是假日喜歡去的場館吧！"
        : "Feel free to share the games you love or the venues you enjoy visiting on weekends!"
    },
    skills: {
      title: lang === 'zh' ? '核心技能' : 'Core Skills',
      categories: [
        {
          name: lang === 'zh' ? '🎨 設計方法論' : '🎨 Design Methodology',
          items: lang === 'zh' 
            ? ['0→1 產品定義', '線框到高保真原型', '用戶研究 & 易用性測試', '互動設計 + IA', '設計系統建立']
            : ['0→1 Product Definition', 'Wireframe to Hi-Fi Proto', 'User Research & Usability', 'Interaction Design + IA', 'Design System Architecture']
        },
        {
          name: lang === 'zh' ? '📊 數據驅動' : '📊 Data Driven',
          items: lang === 'zh'
            ? ['Google Analytics', 'Hotjar（熱區、錄影）', '數據迭代優化', '使用者行為分析']
            : ['Google Analytics', 'Hotjar (Heatmaps, Recordings)', 'Data Optimized Iteration', 'User Behavior Analysis']
        },
        {
          name: lang === 'zh' ? '⚡ AI 工作流' : '⚡ AI Workflow',
          items: lang === 'zh'
            ? ['獨家 Skill 加速提案', 'AI+Figma 原型到產品', 'AI 輔助發散與收斂', 'AI Agent 加速工作流']
            : ['Skill-Driven Accelerated Proposals', 'AI+Figma: Prototype to Product', 'AI Aided Divergence/Convergence', 'AI Agent Accelerated Workflow']
        },
        {
          name: lang === 'zh' ? '🛠️ 工具' : '🛠️ Tools',
          items: ['Figma & Claude', 'Notion & Illustrator', 'GA, Hotjar', 'Front-end Logic']
        },
        {
          name: lang === 'zh' ? '🌍 遠端協作' : '🌍 Remote Collab',
          items: lang === 'zh'
            ? ['支持遠端協作', 'Async 溝通與文件化', '跨團隊協作']
            : ['Remote Collaboration', 'Async Communication & Docs', 'Cross-team Collaboration']
        },
        {
          name: lang === 'zh' ? '🎯 領域專長' : '🎯 Specialized Domains',
          items: lang === 'zh'
            ? ['SaaS 平台設計', 'Product builder', '電商 UI/UX', '互動遊戲設計']
            : ['SaaS Platform Design', 'Product Builder', 'E-commerce UI/UX', 'Interactive Game Design']
        }
      ]
    },
    contact: {
      title: lang === 'zh' ? '開始對話' : 'Get in Touch',
      desc: lang === 'zh' ? '有有趣的設計挑戰？想探討產品思路？歡迎聯繫。' : 'Have an interesting design challenge? Want to discuss product ideas? Let\'s connect.',
      cta: lang === 'zh' ? '電子郵件' : 'Email',
      behance: lang === 'zh' ? 'Behance' : 'Behance',
    },
    footer: {
      text: lang === 'zh' ? '© 2025 Feza Cheng • 位在台北' : '© 2025 Feza Cheng • Based in Taipei'
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setActiveImageIdx(0);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#F9F8F4]/80 backdrop-blur-md border-b border-[#E6E2DA] px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold tracking-tighter text-[#2D3A31]">Feza</div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 items-center text-[0.85rem] font-medium uppercase tracking-wider">
            <li><a href="#work" className="hover:text-[#A68B7C] transition-colors">{t.nav.work}</a></li>
            <li><a href="#skills" className="hover:text-[#A68B7C] transition-colors">{t.nav.skills}</a></li>
            <li><a href="#about" className="hover:text-[#A68B7C] transition-colors">{t.nav.about}</a></li>
            <li><a href="#contact" className="hover:text-[#A68B7C] transition-colors">{t.nav.contact}</a></li>
          </ul>
          <div className="pl-6 border-l border-[#E6E2DA] flex gap-2">
            <button 
              onClick={() => setLang('zh')}
              className={`text-[0.75rem] font-bold px-2 py-1 transition-colors ${lang === 'zh' ? 'text-[#2D3A31]' : 'text-[#A68B7C] hover:text-[#2D3A31]'}`}
            >
              中文
            </button>
            <span className="text-[#E6E2DA]">|</span>
            <button 
              onClick={() => setLang('en')}
              className={`text-[0.75rem] font-bold px-2 py-1 transition-colors ${lang === 'en' ? 'text-[#2D3A31]' : 'text-[#A68B7C] hover:text-[#2D3A31]'}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-32 lg:pt-32 lg:pb-48 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-0 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10 lg:pr-12 z-10"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.1] text-[#2D3A31]">
            {lang === 'zh' ? <>設計 <em className="italic text-[#967153]">讓人想用</em> 的產品</> : <>Designing Products <em className="italic text-[#967153]">People Love</em> to Use</>}
          </h1>
          <p className="text-xl md:text-2xl text-[#2D3A31]/80 max-w-xl leading-relaxed font-medium">
            {t.hero.desc}
          </p>
          <div className="flex gap-4">
            <a 
              href="#work"
              className="inline-block bg-[#2D3A31] text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#A68B7C] transition-all transform hover:-translate-y-1 soft-shadow"
            >
              {t.nav.work}
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] arch-mask overflow-hidden soft-shadow group lg:-ml-20"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/19fVl9InP_aojBPi_EOvURNCmZo5nOz_h" 
            alt="Portrait"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#2D3A31]/5 pointer-events-none" />
        </motion.div>
      </header>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="bg-white/40 backdrop-blur-sm rounded-[40px] p-12 md:p-20 border border-forest/10 soft-shadow space-y-10"
        >
          <h2 className="font-serif text-5xl font-bold tracking-tight text-forest">{t.about.title}</h2>
          <div className="space-y-8 text-xl leading-relaxed text-forest/90 font-medium">
            <p className="font-bold text-[#A68B7C] text-2xl">{t.about.p1}</p>
            <p className="text-forest/70 font-medium">{t.about.subtitle}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p className="font-bold text-[#A68B7C] text-lg">{t.about.footer}</p>
          </div>
        </motion.div>
      </section>

      {/* Experience Stats */}
      <section className="py-32 bg-[#F2F0EB] text-forest border-y border-forest/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { value: lang === 'zh' ? 'Async 協作' : 'Async Collab', label: lang === 'zh' ? '支持全遠端' : 'Remote Support' },
            { value: lang === 'zh' ? '團隊賦能' : 'Team Enablement', label: lang === 'zh' ? 'SOP 輸出' : 'SOP Output' },
            { value: lang === 'zh' ? '商用 0 到 1' : 'Commercial 0-1', label: lang === 'zh' ? '獨立交付' : 'Indep. Delivery' },
            { value: 'B2B', label: lang === 'zh' ? 'SaaS 專家' : 'SaaS Expert' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <p className="font-serif font-bold tracking-tighter leading-none text-3xl md:text-5xl">{stat.value}</p>
              <div className="h-px w-8 bg-forest/20 mx-auto" />
              <p className="text-[0.7rem] uppercase tracking-widest font-bold opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">{lang === 'zh' ? '作品集' : 'Portfolio'}</h2>
          <p className="text-[#A68B7C] tracking-widest uppercase text-sm font-medium italic">Case Studies</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer bg-white/50 backdrop-blur-sm rounded-[40px] overflow-hidden border border-forest/5 hover:soft-shadow transition-all duration-500 ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-forest/5">
                <img 
                  src={project.image} 
                  alt={project.title[lang]}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.id === 5 ? 'object-top' : ''}`}
                />
              </div>
              <div className="p-10 space-y-8">
                <div className="flex justify-between items-start">
                  <span className="px-4 py-1.5 bg-alabaster rounded-full text-[0.7rem] font-bold text-[#A68B7C] uppercase tracking-widest border border-forest/5">
                    {project.label}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold group-hover:text-[#A68B7C] transition-colors leading-tight">
                  {project.title[lang]}
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '挑戰' : 'Challenge'}</p>
                    <p className="text-sm text-forest/70 line-clamp-2 leading-relaxed font-medium">{project.challenge[lang]}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '方案' : 'Solution'}</p>
                    <p className="text-sm text-forest/70 line-clamp-2 leading-relaxed font-medium">{project.solution[lang]}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#E6E2DA]/30 py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center tracking-tight">{t.skills.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {t.skills.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm border border-forest/5 rounded-[40px] p-10 soft-shadow hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-1 w-12 bg-forest/20 rounded-full mb-8" />
                <h3 className="font-serif text-2xl font-bold text-forest mb-8">{cat.name}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex gap-4 text-forest/70 font-medium leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A68B7C] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-serif text-5xl font-bold">{t.contact.title}</h2>
          <p className="text-lg text-[#2D3A31]/70">{t.contact.desc}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:feza.uiux@gmail.com"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#A68B7C] rounded-full text-[#A68B7C] font-bold uppercase tracking-widest text-sm hover:bg-[#A68B7C] hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Mail size={18} />
            {t.contact.cta}
          </a>
          <a 
            href="https://www.behance.net/feza_uiux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#A68B7C] rounded-full text-[#A68B7C] font-bold uppercase tracking-widest text-sm hover:bg-[#A68B7C] hover:text-white transition-all transform hover:-translate-y-1"
          >
            <Palette size={18} />
            {t.contact.behance}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E6E2DA] py-12 text-center text-sm text-[#A68B7C]">
        <p>{t.footer.text}</p>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#2D3A31]/60 backdrop-blur-sm flex justify-end"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-alabaster w-full max-w-6xl h-full shadow-2xl relative overflow-hidden flex flex-col md:rounded-l-[60px]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors group"
                aria-label="Close"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {/* Left Side: Fixed Image Gallery with Pinch Zoom */}
                <div 
                  className="bg-[#E6E2DA] w-full lg:w-[45%] h-[40vh] lg:h-full shrink-0 relative overflow-hidden group/gallery"
                >
                  <div className="w-full h-full">
                    <TransformWrapper
                      ref={transformRef}
                      initialScale={1}
                      minScale={1}
                      maxScale={4}
                      wheel={{ step: 0.15 }}
                      panning={{ velocityDisabled: true }}
                      doubleClick={{ disabled: true }}
                    >
                      <TransformComponent
                        wrapperStyle={{ width: '100%', height: '100%' }}
                        contentStyle={{ width: '100%', height: '100%' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`project-${selectedProject.id}-img-${activeImageIdx}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={selectedProject.gallery ? selectedProject.gallery[activeImageIdx] : selectedProject.image}
                            alt={selectedProject.title[lang]}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            draggable={false}
                            loading="lazy"
                          />
                        </AnimatePresence>
                      </TransformComponent>
                    </TransformWrapper>
                  </div>

                  <div className="absolute top-4 left-4 z-10 flex gap-2 pointer-events-none">
                     <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[0.65rem] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                       <ZoomIn size={10} /> {lang === 'zh' ? '滾輪縮放 / 拖移' : 'Scroll to Zoom / Drag'}
                     </span>
                  </div>

                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                      <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[0.65rem] font-bold text-white">
                        {activeImageIdx + 1} / {selectedProject.gallery.length}
                      </span>
                    </div>
                  )}

                  {/* Gallery Navigation Arrows */}
                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIdx(prev => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1))
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/gallery:opacity-100"
                      >
                        <ChevronRight className="rotate-180" size={20} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIdx(prev => (prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1))
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover/gallery:opacity-100"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                  
                  {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/10 backdrop-blur-md rounded-full">
                      {selectedProject.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIdx(i)}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] font-bold transition-all ${
                            i === activeImageIdx ? 'bg-white text-[#2D3A31] scale-110' : 'bg-white/30 text-white hover:bg-white/50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Scrollable Content */}
                <div className="p-8 md:p-14 lg:p-20 space-y-12 overflow-y-auto w-full lg:w-[55%] bg-white">
                  <header className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-4 py-1.5 bg-[#F2F0EB] rounded-full text-xs font-bold text-[#A68B7C] uppercase tracking-widest">
                        {selectedProject.label}
                      </span>
                      {selectedProject.categories.map(cat => (
                        <span key={cat} className="text-[0.65rem] font-bold border border-[#E6E2DA] px-2 py-0.5 rounded-md text-[#2D3A31]/40 uppercase tracking-tighter">{cat}</span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">{selectedProject.title[lang]}</h2>
                      {selectedProject.subtitle && (
                        <p className="text-xl md:text-2xl font-serif text-[#A68B7C] font-medium leading-relaxed italic">
                          {selectedProject.subtitle[lang]}
                        </p>
                      )}
                    </div>
                  </header>

                  <div className="space-y-12">
                    {/* Core Info - Always Consistent Style */}
                    <div className="space-y-8 text-[#2D3A31]/90">
                      <div className="space-y-2">
                        <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '挑戰' : 'Challenge'}</p>
                        <p className="text-lg leading-relaxed">{selectedProject.challenge[lang]}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '方案' : 'Solution'}</p>
                        <p className="text-lg leading-relaxed">{selectedProject.solution[lang]}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '成果' : 'Result'}</p>
                        <p className="text-xl font-bold text-[#A68B7C]">{selectedProject.result[lang]}</p>
                      </div>
                    </div>

                    {selectedProject.detailedContent && (
                      <div className="pt-12 border-t border-[#E6E2DA] space-y-16">
                        {/* Vision */}
                        {selectedProject.detailedContent.vision && (
                          <section className="space-y-3">
                            <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '專案背景與願景' : 'Vision & Background'}</p>
                            <p className="text-lg leading-relaxed text-[#2D3A31]/80">{selectedProject.detailedContent.vision[lang]}</p>
                          </section>
                        )}

                        {/* Challenges List */}
                        {selectedProject.detailedContent.challenges && (
                          <section className="space-y-3">
            <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '詳細面臨挑戰' : 'The Challenges'}</p>
                            <ul className="space-y-4">
                              {selectedProject.detailedContent.challenges[lang].map((c, i) => (
                                <li key={i} className="flex gap-4 items-start text-lg text-[#2D3A31]/80 italic">
                                  <span className="w-2 h-2 rounded-full bg-[#A68B7C] shrink-0 mt-3" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {/* Strategies */}
                        {selectedProject.detailedContent.strategies && (
                          <section className="space-y-6">
                            <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '產品設計策略' : 'Design Strategy'}</p>
                            <div className="grid gap-6">
                              {selectedProject.detailedContent.strategies.map((s, i) => (
                                <div key={i} className="bg-[#F2F0EB]/50 p-6 rounded-2xl space-y-2">
                                  <h4 className="font-bold text-lg text-[#2D3A31]">{s.title[lang]}</h4>
                                  <p className="text-sm leading-relaxed text-[#2D3A31]/70">{s.desc[lang]}</p>
                                </div>
                              ))}
                            </div>
                          </section>
                        )}

                        {/* Impact */}
                        {selectedProject.detailedContent.impacts && (
                          <section className="bg-[#8C9A84]/10 text-[#A68B7C] p-8 md:p-12 rounded-[2.5rem] space-y-8">
                            <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '📈 實質商業影響' : '📈 Business Impact'}</p>
                            <div className="grid gap-6">
                              {selectedProject.detailedContent.impacts[lang].map((imp, i) => {
                                const parts = imp.split('：');
                                if (parts.length < 2) return <p key={i}>{imp}</p>;
                                const [title, content] = parts;
                                return (
                                  <div key={i} className="space-y-1">
                                    <p className="text-[#A68B7C] font-bold text-lg">{title.replace(/\*\*/g, '')}</p>
                                    <p className="opacity-90 leading-relaxed italic">{content}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </section>
                        )}

                        {/* Reflection */}
                        <section className="space-y-8 border-t border-[#E6E2DA] pt-12">
                          <div className="space-y-4">
                            <p className="text-[0.65rem] font-bold text-[#A68B7C] uppercase tracking-widest">{lang === 'zh' ? '💡 內心複盤' : '💡 Expert Reflection'}</p>
                            {selectedProject.detailedContent.expertQuote && (
                              <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-400 leading-snug">
                                {selectedProject.detailedContent.expertQuote[lang]}
                              </blockquote>
                            )}
                          </div>
                          {selectedProject.detailedContent.reflection && (
                            <p className="text-lg leading-relaxed text-[#2D3A31]/80 italic">
                              {selectedProject.detailedContent.reflection[lang]}
                            </p>
                          )}
                        </section>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-12 border-t border-[#E6E2DA] flex flex-wrap gap-x-12 gap-y-6">
                    <div className="space-y-1">
                      <p className="text-[0.65rem] font-bold text-[#2D3A31]/40 uppercase tracking-widest">Role</p>
                      <p className="text-sm font-medium">{selectedProject.role[lang]}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.65rem] font-bold text-[#2D3A31]/40 uppercase tracking-widest">Year</p>
                      <p className="text-sm font-medium">{selectedProject.label}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.65rem] font-bold text-[#2D3A31]/40 uppercase tracking-widest">Industry</p>
                      <p className="text-sm font-medium">{selectedProject.industry[lang]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
