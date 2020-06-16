# figure-1-challenge

## Setup Instructions

**Requirements:**

Developed using Node `v12.13`. I recommend using [nvm](https://github.com/nvm-sh/nvm) to install and manage your Node versions. (If you already have Node installed, you'll have to uninstall it first before switching to `nvm`)

```
# Installs v12.13.1
nvm install 12.13.1

# Now use that installed version!
nvm use 12.13.1
```

This project uses `Expo`, [please follow their setup instructions here](https://docs.expo.io/get-started/installation/). Ignore the setup instructions for iOS/Android emulators if you don't want to use it, you can test it directly on your phone by downloading the Expo client app: [App Store](https://apps.apple.com/ca/app/expo-client/id982107779) or [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA). (These work only if you're computer and phone are on the same wifi AFAIK.)

> Note that it's recommended to install [Watchmen](https://facebook.github.io/watchman/docs/install/#buildinstall) too if you're using macOS.

I'm also using [Yarn Classic](https://classic.yarnpkg.com/lang/en/).

**How to Run Locally:**

1. Clone this repo and navigate to its directory in terminal
2. Build/serve app by running `expo start`. An Expo dashboard will open in your browser.
3. In the dashboard's left panel, you can choose to run the app on the browser or, if setup, Expo's mobile simulators. If you installed the Expo client app to your phone, you can scan the QR code and run it directly to your device.
