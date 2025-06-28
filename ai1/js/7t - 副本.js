// 页面内容数据配置文件
const pageContent = {
    // 页面基本信息
    pageInfo: {
        title: "AI株式予測システム - 未来の株式市場を予測",
        heroTitle: "人工知能が未来の株式市場を予測：迅速・正確・的確",
        avatarImage: "img/1.jpg",
        avatarAlt: "AI アナリスト"
    },

    // 输入区域内容
    inputSection: {
        placeholder: "（例：7203、トヨタ）",
        buttonText: "AI分析を開始"
    },

    // 功能特性
    features: [
        {
            title: "リアルタイムデータ分析",
            description: "当システムはリアルタイムで市場データを分析し、潜在的な投資機会を特定します。重要な情報を見逃すことはありません。"
        },
        {
            title: "パーソナライズされた提案", 
            description: "お客様の投資目標とリスク許容度に基づいて、オーダーメイドの銘柄推奨を提供し、より良い投資戦略の策定をサポートします。"
        },
        {
            title: "多市場カバレッジ",
            description: "当システムは複数の市場と業界をカバーし、多様化された投資選択肢を確実に提供します。"
        }
    ],

    // 用户评价
    testimonials: [
        {
            text: "このAI分析システムのおかげで、投資判断がより明確になりました。データに基づいた客観的な情報が非常に参考になります。",
            author: "投資家A様"
        },
        {
            text: "リアルタイムの市場分析機能が素晴らしく、投資のタイミングを逃すことが減りました。",
            author: "投資家B様"
        },
        {
            text: "多様な市場をカバーしているため、ポートフォリオの多様化に大変役立っています。",
            author: "投資家C様"
        }
    ],

    // 进度条内容
    progressModal: {
        title: "AI システム分析中...",
        steps: [
            "市場分析を実行中...",
            "最新ニュース分析中...",
            "過去データ分析中...",
            "AI分析完了"
        ]
    },

    // 结果弹窗内容
    resultModal: {
        title: "✅ 株式分析レポート完成",
        content: [
            "株式の潜在能力を解放するまであと一歩！",
            "LINEで私たちを追加し、解除コード7を送信してください：",
            "下記リンクをクリックしてレポートを受信"
        ],
        buttonText: "レポートを受信"
    },

    // 风险声明
    riskDisclaimer: {
        title: "⚠️ 重要リスク提示",
        content: [
            "本サービスは一般的な市場情報のみを提供し、いかなる投資アドバイスや推奨も構成しません。",
            "• 金融市場にはリスクが存在し、投資元本の一部または全部を失う可能性があります。表示されているすべての例は過去のデータ分析であり、将来の収益を保証するものではありません。",
            "• 投資家は自身のリスク許容度に基づいて慎重な判断を行うべきです。すべての情報は客観的な事実の陳述であり、投資アドバイスを構成しません。",
            "• AI分析ツールは過去のデータとアルゴリズムモデルに基づく確率計算のみを提供し、いかなる形式の投資アドバイスも構成しません。",
            "• 過去のパフォーマンスは将来のパフォーマンスを示すものではなく、実際の収益はAIの予測より低いまたは高い可能性があります。"
        ]
    },

    // 页脚链接
    footerLinks: [
        {
            text: "プライバシーポリシー",
            url: ""
        },
        {
            text: "利用規約", 
            url: ""
        }
    ]
};

// 页面渲染函数
function renderPage() {
    // 设置页面标题
    document.getElementById('pageTitle').textContent = pageContent.pageInfo.title;

    // 渲染主要内容
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="hero-section">
            <h1 class="hero-title">${pageContent.pageInfo.heroTitle}</h1>
            <div class="profile-image-container">
                <img src="img/1.jpg" alt="${pageContent.pageInfo.avatarAlt}" class="ai-avatar">
            </div>
        </section>

        <section class="input-section">
            <input type="text" class="stock-input-field" placeholder="${pageContent.inputSection.placeholder}" id="stockInput">
            <button class="analyze-btn" onclick="startAnalysis()">${pageContent.inputSection.buttonText}</button>
        </section>

        <section class="features-grid">
            ${pageContent.features.map(feature => `
                <div class="feature-card">
                    <h3 class="feature-title">${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `).join('')}
        </section>

        <section class="testimonials-section">
            ${pageContent.testimonials.map(testimonial => `
                <div class="testimonial-card">
                    <p>"${testimonial.text}" - ${testimonial.author}</p>
                </div>
            `).join('')}
        </section>

        <div class="risk-disclaimer">
            <h3 class="risk-title">${pageContent.riskDisclaimer.title}</h3>
            ${pageContent.riskDisclaimer.content.map(text => `<p>${text}</p>`).join('<br>')}
        </div>

        <div class="footer-links">
            ${pageContent.footerLinks.map(link => `
                <a href="${link.url}" class="footer-link" target="_blank">${link.text}</a>
            `).join('')}
        </div>
    `;

    // 渲染进度弹窗标题
    document.getElementById('progressTitle').textContent = pageContent.progressModal.title;

    // 渲染结果弹窗内容
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <h3 style="color: var(--success-green); margin-bottom: 20px;">${pageContent.resultModal.title}</h3>
        <p style="font-size: 18px; margin: 20px 0;">${pageContent.resultModal.content[0]}</p>
        <p style="margin: 15px 0;">${pageContent.resultModal.content[1]}</p>
        <p style="color: var(--primary-yellow); font-weight: bold; margin: 20px 0;">${pageContent.resultModal.content[2]}</p>
        <button class="analyze-btn" style="margin-top: 20px;" onclick="u9()">${pageContent.resultModal.buttonText}</button>
    `;
}

// 页面加载完成后执行渲染
document.addEventListener('DOMContentLoaded', renderPage);