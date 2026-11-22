# Personal Blog

一个用于记录学习过程、整理论文阅读笔记、沉淀技术思考与探索研究方向的个人学术数字花园。

网站以简洁的学术风格为基础，将论文笔记、学习记录、研究兴趣与个人项目集中呈现。内容会随着学习和探索持续更新。

## 网站内容

-   **Home**：网站首页与近期内容入口。
-   **Explore**：记录学习历程、研究兴趣、当前关注事项与想法。
-   **Papers**：整理论文阅读笔记。
-   **Technical**：技术知识与实践记录。
-   **Learning**：课程、资料与阶段性学习内容。
-   **Projects**：个人项目与实践成果。
-   **Journal**：日常记录与阶段性思考。
-   **About**：个人背景、兴趣方向与相关链接。

其中，Explore 包含以下页面：

-   **My Journey**：学习经历与阶段性探索。
-   **Research Taste**：研究兴趣、关注的问题与受到启发的工作。
-   **Current Desk**：当前正在学习、探索和实践的内容。
-   **Notes & Thoughts**：值得保留的想法、问题与思考。

## 项目结构

``` text
personal_blog/
├── public/                 # 图片等静态资源
├── src/
│   └── pages/              # Astro 页面与路由
├── paper-notes/
│   ├── assets/             # 论文笔记配图
│   └── papers/             # Markdown 论文笔记
├── .vscode/                # VS Code 项目配置
├── astro.config.mjs        # Astro 配置
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## 技术栈

-   [Astro](https://astro.build/)：网站框架与静态页面构建。
-   Markdown：论文笔记与文本内容。
-   CSS：页面样式与响应式布局。
-   GitHub Pages：计划使用的静态网站托管平台。
-   GitHub Actions：计划用于自动构建与部署。

## 本地运行

请先安装 Node.js 和 npm。

在项目根目录执行：

``` bash
npm install
npm run dev
```

启动后，根据终端提示打开本地开发地址。

构建生产版本：

``` bash
npm run build
```

本地预览构建结果：

``` bash
npm run preview
```

## 部署说明

项目当前按 GitHub Pages 项目站点配置，站点地址为：

<https://trivial-things.github.io/paper-notes/>

Astro 的 `base` 配置为 `/paper-notes`。部署时需要确保 GitHub Pages
的发布配置与项目构建配置保持一致。

GitHub Actions 自动部署工作流将在部署配置完成后启用。

## 内容维护

-   网站页面位于 `src/pages/`。
-   静态图片等资源放在 `public/`。
-   论文笔记及其配图分别维护在 `paper-notes/papers/` 和
    `paper-notes/assets/`。
-   新增内容时，尽量沿用现有页面的导航、视觉样式与路径约定。

## 许可

本仓库中的文字、笔记、代码与图片资源可能具有不同的版权或许可状态。引用第三方材料时，请以原始来源及其许可说明为准。
