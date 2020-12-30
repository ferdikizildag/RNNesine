# RNNesine
React-native, context api, stack navigator, bottom navigator, express server
# Setup
1-) <code>npm install</code><br/>
2-) server path => <code>cd server && npm install && npm start</code><br/>
3-) <code>npx react-native run-ios</code><br/>
4-) <code>npx react-native run-android</code>
# For Android (Network request failed error solution)
1-) Start android emulatör<br/>
2-) <code>adb devices</code><br/>
3-) <code>List of devices attached</code><br/>
    <code>emulator-5554	device</code><br/>
4-) <code>adb -s emulator-5554 reverse tcp:3000 tcp:3000</code><br/>
5-) Reload android emulatör
