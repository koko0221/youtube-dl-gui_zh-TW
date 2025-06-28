Language : 繁體中文 / [English](README_EN.md)

<img src="https://raw.githubusercontent.com/StefanLobbenmeier/youtube-dl-gui/v2.0.0/renderer/img/icon.png" alt="logo" align="left" height="100"/>

# Open Video Downloader（youtube-dl-gui）

[![版本徽章](https://img.shields.io/github/v/release/StefanLobbenmeier/youtube-dl-gui?label=latest-release)](https://github.com/StefanLobbenmeier/youtube-dl-gui/releases/latest)
[![授權條款](https://img.shields.io/github/license/StefanLobbenmeier/youtube-dl-gui)](https://github.com/StefanLobbenmeier/youtube-dl-gui/blob/master/LICENSE)
[![覆蓋率徽章](https://img.shields.io/codecov/c/github/StefanLobbenmeier/youtube-dl-gui)](https://app.codecov.io/gh/StefanLobbenmeier/youtube-dl-gui)
[![下載次數](https://img.shields.io/github/downloads/StefanLobbenmeier/youtube-dl-gui/total)](https://github.com/StefanLobbenmeier/youtube-dl-gui/releases/latest)
[![CI 狀態](https://img.shields.io/github/actions/workflow/status/StefanLobbenmeier/youtube-dl-gui/continuous-integration.yaml)](https://github.com/StefanLobbenmeier/youtube-dl-gui/actions)

🔗 專案連結：[https://github.com/StefanLobbenmeier/youtube-dl-gui](https://github.com/StefanLobbenmeier/youtube-dl-gui)

這是一款基於 Electron 與 Node.js 所開發的跨平台圖形介面程式，用來搭配 youtube-dl 使用。

＊本文使用使用 ChatGPT 翻譯

---
### 下載 (V2.5.5)：

windows：[安裝版](https://github.com/koko0221/youtube-dl-gui_zh-TW/releases/latest/download/Open-Video-Downloader-Setup-2.5.5.exe
) [免安裝版](https://github.com/koko0221/youtube-dl-gui_zh-TW/releases/latest/download/Open-Video-Downloader-2.5.5.exe
)

MacOS：[點我下載](https://github.com/koko0221/youtube-dl-gui_zh-TW/releases/latest/download/Open-Video-Downloader-2.5.5-universal.dmg
)

Linux：[點我下載](https://github.com/koko0221/youtube-dl-gui_zh-TW/releases/latest/download/Open-Video-Downloader-2.5.5.AppImage
)

---

### 功能特色：

* 支援多平台影片下載：YouTube、Vimeo、Twitter 等眾多網站
* 一次可下載多部影片、播放清單或整個頻道
* 可選擇欲下載的解析度與格式
* 支援私密影片下載（目前僅於 YouTube 測試）
* 多線程下載，最多可同時下載 32 部影片
* 顯示下載後會佔用的儲存空間大小
* 程式會自動保持 youtube-dl 為最新版本

可參考 [應用程式操作示意圖](#Demo-gif)！

---

## 如何使用

1. 前往 [發布頁面](https://github.com/StefanLobbenmeier/youtube-dl-gui/releases/latest) 下載對應你作業系統的安裝檔或可執行檔。
2. Windows 使用者請確認已安裝 [Microsoft Visual C++ 2010 可轉散發套件 (x86)](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe)。
3. 將影片連結貼到頂部輸入框中。
4. 等待程式擷取影片所需的中繼資料。
5. 點擊下載，影片將會儲存至下載資料夾。

想了解更多功能？請參閱 [使用說明 Wiki](https://github.com/StefanLobbenmeier/youtube-dl-gui/wiki/)。

---

## 支持本專案

任何形式的幫助都非常感謝，例如：

* 測試與回報錯誤
* 提交 Pull Request 協助改進
* 捐款支持（[Ko-fi](https://ko-fi.com/stefanlobbenmeier)）

---

## 程式無法正常運作？

請先查看 [常見問題集 FAQ](https://github.com/StefanLobbenmeier/youtube-dl-gui/wiki/FAQ) 或 [Wiki](https://github.com/StefanLobbenmeier/youtube-dl-gui/wiki/)。

還是無法解決？歡迎[建立 Issue](https://github.com/StefanLobbenmeier/youtube-dl-gui/issues)，說明你遇到的問題。

---

## 從原始碼建構

1. 使用下列指令複製本專案：

   ```
   git clone https://github.com/StefanLobbenmeier/youtube-dl-gui.git
   ```
2. 進入資料夾後安裝 npm 相依套件：

   ```
   npm install
   ```
3. 使用 `electron-builder` 進行建構（[相關說明文件](https://www.electron.build/cli)）：

   * Windows 安裝檔建構指令為：

     ```
     npx electron-builder --win
     ```
4. 生成的安裝檔會出現在 `dist` 資料夾中。

⚠️ 本應用僅在 Windows、Linux 和 macOS 上進行測試。若你嘗試建構其他平台或架構的版本，可能會出現問題且不受支援。

---

## 未來計畫功能

* 進階模式可選擇特定音訊與視訊編碼器
* 顯示所有音質選項
* 支援下載直播串流

歡迎[提交功能建議](https://github.com/StefanLobbenmeier/youtube-dl-gui/issues)。

---

## 操作示意圖

<img src="ytdlgui_demo.gif" alt="demo" width="500"/>  

---

## 貢獻致謝

特別感謝原始開發者 [jely2002](https://github.com/jely2002)，雖然他已停止維護先前版本：[https://github.com/jely2002/youtube-dl-gui](https://github.com/jely2002/youtube-dl-gui)

---

## 責任與授權聲明

本程式及其維護者不對任何錯誤用途負責，詳見 [AGPL-3.0 授權條款第 16 條](https://github.com/StefanLobbenmeier/youtube-dl-gui/blob/master/LICENSE)。

本專案維護者不認可任何違反當地法律（如 DMCA）之用途，並呼籲使用者以正當方式使用本應用。

---

如果你有特定段落需要再精修或增補，我也可以幫忙喔，例如加上 [功能列表翻譯細節](f) 或 [建構步驟教學](f)。
