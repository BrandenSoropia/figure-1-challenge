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

You can use React Dev tools (run on your computer, not browser!) to inspect elements. You will need to do the following:

1. Install devtools globally by running `npm install -g react-devtools@^3` in terminal. It needs version 3 since [Expo37 is running React Native 0.61](https://docs.expo.io/versions/latest/), and [devtools 4 needs 0.62+](https://reactnative.dev/docs/debugging#react-developer-tools).
2. Run app in a simulator (not Expo client!).
3. Start dev tools by running `react-devtools` in your terminal.
4. Trigger "shake" gesture in simulator. For iOS, that's done by pressing `Cmd + Control + Z` or `Device > Shake`. Click "Reload" and it should be connected!
5. You might have to reshake and click "Show Element Inspector" to actually inspect elements.

**View UI Library Via Storybook:**

You can look directly at the isolated components used to make this app using Storybook in-app!

1. Run app on simulator or your phone using the above mentioned instructions.
2. Click on the bug icon on the top bar (🐞) to toggle showing Storybook or the app!

**To Developer With Storybook:**
It's a little funky since React Native can't use dynamic imports to automatically find all stories. I've set it up to use a script to auto-generate a `storyLoader.js` file that'll have find all stories in `src/` folder everytime you run `yarn storybook`.

It's super sketchy, I think, but does the job for now!

So to generate an updated list of stories, run `yarn storybook`, once done, kill it (because it's not setup to work on web atm...). Refresh the app on your phone/simulator and it should have the latest stories!

## Nice To Haves

1. Define a theme for easier styling consistency
2. Fix Storybook to fit entire device.
