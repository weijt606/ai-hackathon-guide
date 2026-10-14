# AI 黑客松参赛实战指南

**README 语言：简体中文 · [English](README.en.md)**

[![中文阅读](https://img.shields.io/badge/阅读-简体中文-ffd440?style=for-the-badge)](https://weijt606.github.io/ai-hackathon-guide/)
[![Read in English](https://img.shields.io/badge/Read-English-141111?style=for-the-badge)](https://weijt606.github.io/ai-hackathon-guide/en.html)

来自欧洲 AI 黑客松赛场的六章实战经验：找比赛、组队、选题、开发上线、Demo 与 Pitch。

**作者：AI不FOMO指南** · **小红书号：27797520622**

## 阅读

本项目以可交互 HTML 为主要版本，顶部徽章可直接打开对应语言的网站。

- [中文在线阅读](https://weijt606.github.io/ai-hackathon-guide/) · [英文在线阅读](https://weijt606.github.io/ai-hackathon-guide/en.html)
- 网页源文件：[index.html](index.html)（中文）· [en.html](en.html)（英文）
- 正文源稿：[中文 Markdown](docs/zh.md) · [英文 Markdown](docs/en.md)
- [54 页中文原稿对照](https://weijt606.github.io/ai-hackathon-guide/source.html)

## 六章内容

| 章节 | 内容 |
| --- | --- |
| 01 | 黑客松玩法、奖项与赞助商 |
| 02 | 寻找赛事与评估参赛价值 |
| 03 | 参赛者画像与组队指南 |
| 04 | 选题与拿奖策略 |
| 05 | Build & Launch：开发、上线与可靠性 |
| 06 | Demo & Pitch：提交、演示与评委问答 |

## 功能

- 完整中英文正文，共 6 章、32 个小节。
- 响应式布局，支持桌面与移动端阅读。
- 章节及小节导航、阅读进度、字号调节、继续阅读。
- 本地字体与资源，无需构建、账号或 API key，可离线阅读。
- 署名水印与原稿对照窗口。

## 本地预览

```sh
git clone https://github.com/weijt606/ai-hackathon-guide.git
cd ai-hackathon-guide
python3 -m http.server 8765
```

打开 http://localhost:8765 ，英文版为 http://localhost:8765/en.html 。也可直接打开 HTML 文件；关闭 JavaScript 后仍可阅读正文。

## GitHub Pages

网站通过 `main` 分支根目录部署。在仓库 **Settings → Pages** 中选择 **Deploy from a branch → main → / (root)**。

中文网站：https://weijt606.github.io/ai-hackathon-guide/

英文网站：https://weijt606.github.io/ai-hackathon-guide/en.html

## 编辑说明

中文依据作者提供的《欧洲 AI 黑客松不完全指北》EP01–06 整理，修正明显 OCR 错误和跨页断行，保留原文观点、案例与叙述语气。重复封面与开场履历合并，连载用语调整为章间过渡，并对部分概括性表述作编辑修订。

英文版完整翻译六章正文。原稿图像保留中文原貌，与编辑版措辞可能不同。Markdown 中的页码注释对应原稿页面。

修改正文时，请同步更新 `docs/` 下的源稿及对应 HTML，并保持两种语言一致。

## 贡献

欢迎通过 Issue 或 Pull Request 提交错字、翻译、无障碍和排版改进。请说明修改位置和理由。提交文档贡献表示同意按 CC BY-NC 4.0 授权该贡献；代码贡献按 MIT 授权。

## 授权

- **文档内容：CC BY-NC 4.0**。允许署名转载及修改，禁止商用；须提供许可证链接并注明修改。见[文档授权](LICENSE-CONTENT.md)和[完整条款](LICENSES/CC-BY-NC-4.0.txt)。
- **网站原创代码：MIT**。见 [LICENSE](LICENSE)。
- **第三方设计与字体**：保留原许可证，见[第三方声明](THIRD-PARTY-NOTICES.md)。

署名水印用于标示来源；原稿图片文件本身未烧录水印，网页展示时叠加水印。

## 个人观点与品牌声明

本指南基于作者个人参赛经历与观察，仅代表作者个人观点，不代表文中提及的赛事主办方、公司或平台的立场。品牌、商标及产品名称归各自权利人所有，相关提及仅用于识别、说明与经验分享，不表示其对本指南的认可、授权或赞助。赛事规则、产品功能及服务条款可能变化，请以官方最新信息为准。文中经验不构成对参赛资格、获奖或产品效果的保证。
