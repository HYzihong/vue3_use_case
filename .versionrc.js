/**
 * @Author: hy
 * @Date: 2022-02-01 03:43:50
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-01 03:47:17
 * @FilePath: /vue3UseCase/.versionrc.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
/*******
 * @see https://www.jianshu.com/p/bfc96f9a7939
 */
module.exports = {
  types: [
    { type: "feat", section: "✨ Features | 新功能" },
    { type: "fix", section: "🐛 Bug Fixes | Bug 修复" },
    { type: "init", section: "🎉 Init | 初始化" },
    { type: "docs", section: "✏️ Documentation | 文档" },
    { type: "style", section: "💄 Styles | 风格" },
    { type: "refactor", section: "♻️ Code Refactoring | 代码重构" },
    { type: "perf", section: "⚡ Performance Improvements | 性能优化" },
    { type: "test", section: "✅ Tests | 测试" },
    { type: "revert", section: "⏪ Revert | 回退", hidden: true },
    { type: "build", section: "📦‍ Build System | 打包构建" },
    { type: "chore", section: "🚀 Chore | 构建/工程依赖/工具" },
    { type: "ci", section: "👷 Continuous Integration | CI 配置" },
  ],
  // 更新主版本号 standard-version -- --release-as major
  // 更新补丁版本 standard-version -- --release-as patch
};
