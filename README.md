# react native 範例

這是一個基於學習如何用react native開發手機(iOS & Android)app範例.

## 建立開發環境

### mac
    
#### 安裝Homebrew

在終端機下輸入

```shell=
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
#### 安裝Node

```shell=
brew install node
```

#### 安裝Watchman

```shell=
brew install watchman
```

#### 安裝JDK

```shell=
brew tap AdoptOpenJDK/openjdk
brew cash install adoptopenjdk8
```

#### 安裝XCode

 - 到App Store中安裝XCode. 
 - 安裝完執行XCode, XCode->Preferences, 
 - 到Locations頁面, 將Commnad Line Tools設定為目前安裝的XCode版本.

#### 安裝CocoaPods

```shell=
sudo gem install cocoapods
```

#### 安裝Android Studio

 - 到https://developer.android.com/studio 頁面, 下載android studio的dmg擋.
 - 下載完成之後, 將dmg檔開啟, 將Android Studio移到Applications中.
 - 到**Finder**->**應用程式**, 啟動剛剛移動進來的Android Studio.
 - Welcome頁面, Next.
 - Install Type, 點選Custom, Next.
 - Select UI Theme, 依個人喜好, Next.
 - SDK Components Setup, 點選**Performance**與**Android Virtual Device**, Next.
 - Emulator Settings, Next.
 - Verify Settings, Next.
 - 安裝完成之後, 在Welcome to Android Studio頁面, 點選右下角的Configure->SDK Manager
 - Appearance & Behavior -> System Settings -> Android SDK, 
     - 在SDK Platforms中, 點選右下角的Show Package Details, 點選Android 9.0(Pie)的**Android SDK Platform 28**, **intel x86 Atom System image**與**Google APIs Intel x86 Atom System image**.
     - 在SDK Tools, 點選右下角的Show Package Details, 點選**28.0.3**.
     - 點選Apply, 在所有的License Agreement中點選Accept, Next.
 - 接下來要Android_HOME路徑的設定.
     - 打開終端機.
     - 輸入
```shell=
touch .bash_profile
open -e .bash_profile
```
 - .bash_profile中, 輸入

```shell=
export ANDROID_HOME=/Users/[Username]/Library/Android/sdk
export PATH=$PATH:ANDROID_HOME/emulator
export PATH=$PATH:ANDROID_HOME/tools
export PATH=$PATH:ANDROID_HOME/tools/bin
export PATH=$PATH:ANDROID_HOME/platform-tools
```

 - 存擋離開後, 在終端機輸入

```shell=
source .bash_profile
```

 - 然後再輸入

```shell=
echo $PATH
```

 - 這時可以看到剛剛設定完的路徑, 可以比對是否正確.

## 建立新的react native專案

 - 打開終端機, 輸入

```shell=
npx react-native init firstApp
```

     - init: 初始化一個新專案
     - firstApp: 新專案名稱
 
 - 這時會在使用者目錄下看見新建立的firstApp資料夾.
 - 在終端機中切換目錄到firstApp,

```shell=
cd firstApp
```

 - 啟動iOS模擬, 輸入下列指令, 成功後會出現iOS模擬器以及Welcome to React畫面.

```shell=
npx react-native run-ios
```

 - 要啟動Android 模擬器,
     - 首先再次打開Android Studio, 點選右下角**Configure**->＊＊AVD Manager**
     - 在Your Virtual Device頁面中, 刪除原有的Virtual Device.
     - 刪除完之後, 再點選**Create Virtual Device**
     - Select Hardware, Pixel 2, Next.
     - System Image, Pie.
     - x86 Image, Pie, API Level 28, x86_64, Android 9.0, Next.
     - Finish.
     - 點選右邊的三角形播放鍵, 啟動Android模擬器.
     - 回到終端機, 輸入下列指令, 成功後可以看到Android模擬器中出現Welcome to React.

```shell=
npx react-native run-android
```