// src/langContent.js

export const langContentNodeJS_Setup = {
    en: {
      headerTitle: "Node.js Installation and Environment Setup on Windows",
      headerDescription: "A step-by-step guide to get Node.js up and running smoothly on your Windows system.",
      step1Title: "Step 1: Install Node.js",
      step1Content: [
        {
          title: "Download Node.js",
          details: [
            "Visit",
            "Download the LTS version for stability."
          ]
        },
        {
          title: "Run Installer",
          details: [
            "Accept the License Agreement.",
            "Choose your installation directory.",
            "Ensure 'Add to PATH' is selected for easier command-line usage."
          ]
        },
        {
          title: "Verify Installation",
          details: [
            "Open Command Prompt and run the following commands:",
            "node -v",
            "npm -v"
          ]
        }
      ],
      step2Title: "Step 2: Set Up Environment Variables (Optional)",
      step2Content: [
        {
          title: "Check PATH",
          details: [
            "Open System Properties → Environment Variables.",
            "Ensure the following path is listed: C:\\Program Files\\nodejs\\"
          ]
        },
        {
          title: "Add to PATH (if missing)",
          details: [
            "Under PATH, click Edit and add: C:\\Program Files\\nodejs\\"
          ]
        }
      ],
      step3Title: "Step 3: Install npm (Node Package Manager)",
      step3Content: [
        "npm is installed automatically when you install Node.js. To verify if npm was installed successfully, run: npm -v",
        "If the version number appears, npm is successfully installed. If not, you may need to reinstall Node.js."
      ],
      step4Title: "Step 4: Verify Global Package Setup",
      step4Content: [
        "Open the Command Prompt and run: npm list -g --depth=0",
        "This will list all globally installed npm packages."
      ],
      step5Title: "Step 5: Create a Test File to Confirm Node.js is Working",
      step5Content: [
        "To test if Node.js is working correctly, create a new JavaScript file (e.g., app.js) and add the following code:",
        "console.log('Node.js is successfully installed!')",
        "Now, run the file using the command: node app.js",
        "You should see the message 'Node.js is successfully installed!' in your terminal."
      ],
      step6Title: "Create React App Setup",
      step6Content: [
        "To get started with React, follow these steps:",
        "First, make sure you have Node.js installed. Then, use npx to create a new React app."
      ],
      step6Command: "npx create-react-app my-app",
      step6Details: [
        "1. Navigate to the folder where you want your project.",
        "2. Run the command below to create your React app."
      ],
      step6Verify: "Once the process is completed, navigate to the 'my-app' directory and start the React app.",
  
      footer: "&copy; 2024 Node.js Setup Guide. All rights reserved."
    },
    hi: {
      headerTitle: "Node.js इंस्टॉलेशन और वातावरण सेटअप विंडोज पर",
      headerDescription: "अपने विंडोज सिस्टम पर Node.js को सुचारु रूप से चलाने के लिए एक कदम दर कदम मार्गदर्शिका।",
      step1Title: "चरण 1: Node.js इंस्टॉल करें",
      step1Content: [
        {
          title: "Node.js डाउनलोड करें",
          details: [
            "यादृच्छिक रूप से",
            "स्थिरता के लिए LTS संस्करण डाउनलोड करें।"
          ]
        },
        {
          title: "इंस्टॉलर चलाएं",
          details: [
            "लाइसेंस समझौते को स्वीकार करें।",
            "अपने इंस्टॉलेशन निर्देशिका का चयन करें।",
            "'PATH में जोड़ें' को चयनित करना सुनिश्चित करें ताकि कमांड लाइन का उपयोग आसान हो।"
          ]
        },
        {
          title: "इंस्टॉलेशन की पुष्टि करें",
          details: [
            "कमांड प्रॉम्प्ट खोलें और निम्नलिखित कमांड चलाएं:",
            "node -v",
            "npm -v"
          ]
        }
      ],
      step2Title: "चरण 2: पर्यावरण चर सेट करें (वैकल्पिक)",
      step2Content: [
        {
          title: "PATH चेक करें",
          details: [
            "सिस्टम गुण → पर्यावरण चर खोलें।",
            "यह सुनिश्चित करें कि निम्नलिखित पथ सूचीबद्ध है: C:\\Program Files\\nodejs\\"
          ]
        },
        {
          title: "PATH में जोड़ें (अगर गायब हो)",
          details: [
            "PATH के तहत, संपादित करें पर क्लिक करें और जोड़ें: C:\\Program Files\\nodejs\\"
          ]
        }
      ],
      step3Title: "चरण 3: npm (Node पैकेज मैनेजर) इंस्टॉल करें",
      step3Content: [
        "npm स्वचालित रूप से Node.js इंस्टॉल करते समय इंस्टॉल हो जाता है। यह सत्यापित करने के लिए कि npm सफलतापूर्वक इंस्टॉल हुआ है, चलाएं: npm -v",
        "यदि संस्करण संख्या दिखाई देती है, तो npm सफलतापूर्वक इंस्टॉल हो गया है। यदि नहीं, तो आपको Node.js को फिर से इंस्टॉल करना पड़ सकता है।"
      ],
      step4Title: "चरण 4: वैश्विक पैकेज सेटअप की पुष्टि करें",
      step4Content: [
        "कमांड प्रॉम्प्ट खोलें और चलाएं: npm list -g --depth=0",
        "यह सभी वैश्विक रूप से इंस्टॉल किए गए npm पैकेजों की सूची देगा।"
      ],
      step5Title: "चरण 5: Node.js के सही तरीके से काम करने की पुष्टि करने के लिए एक परीक्षण फ़ाइल बनाएं",
      step5Content: [
        "सुनिश्चित करने के लिए कि Node.js सही ढंग से काम कर रहा है, एक नई जावास्क्रिप्ट फ़ाइल (जैसे, app.js) बनाएं और निम्नलिखित कोड जोड़ें:",
        "console.log('Node.js सफलतापूर्वक इंस्टॉल हो गया है!')",
        "अब, फ़ाइल को निम्नलिखित कमांड का उपयोग करके चलाएं: node app.js",
        "आपको टर्मिनल में 'Node.js सफलतापूर्वक इंस्टॉल हो गया है!' संदेश दिखाई देना चाहिए।"
      ],
      step6Title: "क्रिएट रिएक्ट ऐप सेटअप",
    step6Content: [
      "React के साथ शुरुआत करने के लिए, इन कदमों का पालन करें:",
      "सबसे पहले, सुनिश्चित करें कि आपके पास Node.js इंस्टॉल है। फिर, npx का उपयोग करके एक नया React ऐप बनाएं।"
    ],
    step6Command: "npx create-react-app my-app",
    step6Details: [
      "1. उस फ़ोल्डर में जाएं जहाँ आप अपना प्रोजेक्ट रखना चाहते हैं।",
      "2. नीचे दिए गए कमांड को चलाकर अपना React ऐप बनाएं।"
    ],
    step6Verify: "प्रक्रिया पूरी होने के बाद, 'my-app' डायरेक्टरी में जाएं और React ऐप शुरू करें।",
      footer: "&copy; 2024 Node.js सेटअप गाइड। सभी अधिकार सुरक्षित।"
    }
  };
  