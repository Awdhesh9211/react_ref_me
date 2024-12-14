const localizationJSX = {
    en: {
      title: 'Understanding JSX',
      whatIsJSX: 'What is JSX?',
      jsxExplanation:
        'JSX stands for JavaScript XML. It\'s a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It is commonly used with React to describe what the UI should look like.',
      jsxRules: 'JSX Rules',
      jsxRulesList: [
        'JSX elements must have a single parent element.',
        'JSX tags are case-sensitive and should be written in lowercase (e.g., <div>).</li>',
        'Attributes in JSX are camelCased (e.g., className instead of class).',
        'JSX expressions must be wrapped in curly braces if they\'re dynamic (e.g., {`Hello, ${name}`}.)',
        'JSX tags must be closed properly (e.g., <img /> for void elements).',
      ],
      jsxCodeExample: 'JSX Code Example',
      jsxCodeExplanation:
        'Here\'s an example of JSX being used in a React component:',
      commonScenarios: 'Common Scenarios with JSX',
      conditionalRendering: 'Conditional Rendering: You can render components based on a condition inside JSX using JavaScript expressions like if, ternary operators, or &&:',
      listRendering: 'Mapping Data: Use map() to render a list of elements dynamically from an array:',
    //   zeroToHero: '0 to Hero in JSX',
    //   zeroToHeroExplanation:
    //     'JSX allows you to rapidly build user interfaces. Here is a simple scenario where we show how JSX turns from "0 to Hero":',
    //   welcomeMessage: 'Become a JSX Hero! Start learning React and JSX today to unlock your potential!',
    },
    hi: {
      title: 'JSX को समझना',
      whatIsJSX: 'JSX क्या है?',
      jsxExplanation:
        'JSX का मतलब है JavaScript XML। यह JavaScript के लिए एक सिंटैक्स विस्तार है जो आपको JavaScript के अंदर HTML जैसे कोड लिखने की अनुमति देता है। यह React के साथ UI को वर्णित करने के लिए सामान्य रूप से उपयोग किया जाता है।',
      jsxRules: 'JSX नियम',
      jsxRulesList: [
        'JSX तत्वों को एकल पैरेंट तत्व होना चाहिए।',
        'JSX टैग केस-संवेदनशील होते हैं और इन्हें छोटे अक्षरों में लिखा जाना चाहिए (जैसे, <div>)।',
        'JSX में गुण camelCase होते हैं (जैसे, className की बजाय class)।',
        'JSX अभिव्यक्तियाँ अगर डायनेमिक हैं तो उन्हें कोलन ब्रेसेस के अंदर लपेटा जाना चाहिए (जैसे, {`Hello, ${name}`}।)',
        'JSX टैग्स को ठीक से बंद किया जाना चाहिए (जैसे, <img /> अव्यक्त तत्वों के लिए)।',
      ],
      jsxCodeExample: 'JSX कोड उदाहरण',
      jsxCodeExplanation:
        'यहां React घटक में JSX के उपयोग का एक उदाहरण है:',
      commonScenarios: 'JSX के साथ सामान्य परिदृश्य',
      conditionalRendering: 'कंडीशनल रेंडरिंग: आप JSX के अंदर JavaScript अभिव्यक्तियों का उपयोग करके किसी शर्त के आधार पर घटकों को रेंडर कर सकते हैं जैसे if, टर्नरी ऑपरेटर, या &&:',
      listRendering: 'डेटा को मैप करना: map() का उपयोग करके एक सूची को गतिशील रूप से एक एरे से रेंडर करें:',
    //   zeroToHero: 'JSX में 0 से Hero तक',
    //   zeroToHeroExplanation:
    //     'JSX आपको तेजी से यूजर इंटरफेस बनाने की अनुमति देता है। यहां एक सरल परिदृश्य है जहां हम दिखाते हैं कि JSX कैसे "0 से Hero" बनता है:',
    //   welcomeMessage: 'एक JSX हीरो बनें! React और JSX सीखना शुरू करें और अपनी क्षमता को अनलॉक करें!',
    },
  };
  
  export default localizationJSX;
  