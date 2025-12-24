'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Code,
  Smartphone,
  Globe,
  Rocket
} from 'lucide-react';

const questions = [
  {
    id: 'build_vs_buy',
    question: 'Build vs Buy?',
    description: 'Should you build a custom solution or buy an existing one?',
    options: [
      {
        value: 'build',
        label: 'Build Custom',
        icon: Code,
        description: 'You need unique features or have specific requirements'
      },
      {
        value: 'buy',
        label: 'Buy/Use Existing',
        icon: DollarSign,
        description: 'Standard solution exists that meets most needs'
      },
      {
        value: 'hybrid',
        label: 'Hybrid Approach',
        icon: Lightbulb,
        description: 'Buy core, customize for specific needs'
      }
    ]
  },
  {
    id: 'mvp_vs_full',
    question: 'MVP or Full Product?',
    description: 'What should you launch first?',
    options: [
      {
        value: 'mvp',
        label: 'MVP (Minimum Viable Product)',
        icon: Rocket,
        description: 'Launch fast with core features, iterate based on feedback'
      },
      {
        value: 'full',
        label: 'Full Product',
        icon: CheckCircle,
        description: 'Build complete solution before launch'
      }
    ]
  },
  {
    id: 'platform',
    question: 'Web vs Mobile First?',
    description: 'Which platform should you prioritize?',
    options: [
      {
        value: 'web',
        label: 'Web First',
        icon: Globe,
        description: 'Reach more users, easier updates, lower cost'
      },
      {
        value: 'mobile',
        label: 'Mobile First',
        icon: Smartphone,
        description: 'Better UX, native features, app store presence'
      },
      {
        value: 'both',
        label: 'Both Simultaneously',
        icon: Sparkles,
        description: 'Maximum reach, higher cost and complexity'
      }
    ]
  },
  {
    id: 'ai_needed',
    question: 'AI Needed or Not?',
    description: 'Does your project require AI capabilities?',
    options: [
      {
        value: 'yes',
        label: 'Yes, AI is Essential',
        icon: Brain,
        description: 'Core functionality depends on AI/ML'
      },
      {
        value: 'maybe',
        label: 'Maybe, Could Enhance',
        icon: Lightbulb,
        description: 'AI could improve but not required'
      },
      {
        value: 'no',
        label: 'No AI Needed',
        icon: XCircle,
        description: 'Traditional solution is sufficient'
      }
    ]
  }
];

export default function DecisionHelper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      generateRecommendations({ ...answers, [questionId]: value });
    }
  };

  const generateRecommendations = (allAnswers) => {
    const recs = {
      whatNotToBuild: [],
      wasteMoney: [],
      smartApproach: []
    };

    // Build vs Buy Analysis
    if (allAnswers.build_vs_buy === 'build') {
      recs.wasteMoney.push('Building standard features that exist in SaaS solutions');
      recs.smartApproach.push('Focus on unique differentiators. Use existing solutions for common features (auth, payments, etc.)');
    } else if (allAnswers.build_vs_buy === 'buy') {
      recs.whatNotToBuild.push('Core infrastructure - use proven solutions');
      recs.smartApproach.push('Leverage existing platforms. Customize only where you add unique value');
    } else {
      recs.smartApproach.push('Use established platforms as foundation, build custom features on top');
    }

    // MVP vs Full Analysis
    if (allAnswers.mvp_vs_full === 'full') {
      recs.wasteMoney.push('Building features users may not want - validate first');
      recs.whatNotToBuild.push('Nice-to-have features before validating core value');
      recs.smartApproach.push('Start with MVP to validate market fit, then iterate based on real user feedback');
    } else {
      recs.smartApproach.push('Launch MVP quickly, gather feedback, prioritize features based on actual usage');
    }

    // Platform Analysis
    if (allAnswers.platform === 'both') {
      recs.wasteMoney.push('Building native apps when web could suffice initially');
      recs.smartApproach.push('Start with responsive web app, add mobile apps only if user demand justifies it');
    } else if (allAnswers.platform === 'mobile') {
      recs.whatNotToBuild.push('Separate web version initially - focus on mobile experience');
      recs.smartApproach.push('Build native mobile app for best UX, consider PWA for web presence');
    } else {
      recs.smartApproach.push('Web-first approach allows faster iteration and broader reach');
    }

    // AI Analysis
    if (allAnswers.ai_needed === 'yes') {
      recs.wasteMoney.push('Building AI from scratch - use proven AI APIs and services');
      recs.smartApproach.push('Leverage existing AI services (OpenAI, Anthropic) rather than building custom models');
    } else if (allAnswers.ai_needed === 'maybe') {
      recs.whatNotToBuild.push('Complex AI features in v1 - add later if users request');
      recs.smartApproach.push('Start without AI, add AI enhancements after validating core product');
    } else {
      recs.smartApproach.push('Focus on core functionality - avoid AI complexity unless necessary');
    }

    // General recommendations
    recs.whatNotToBuild.push('Over-engineering solutions - keep it simple');
    recs.wasteMoney.push('Premature optimization - build, measure, then optimize');
    recs.smartApproach.push('Use modern frameworks and tools to accelerate development');
    recs.smartApproach.push('Implement analytics from day one to make data-driven decisions');

    setRecommendations(recs);
    setShowResults(true);
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations(null);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal_brown via-black to-charcoal_brown pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ebony/50 border border-camel/30 mb-6">
            <Brain className="text-camel" size={20} />
            <span className="text-dry_sage-600 text-sm font-medium">AI Decision Assistant</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-khaki_beige-900 font-comfortaa">
            Smart Project Decisions
          </h1>
          <p className="text-dry_sage-700 text-lg max-w-2xl mx-auto">
            Get AI-powered recommendations to avoid costly mistakes and build the right solution
          </p>
        </motion.div>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-dry_sage-600 text-sm">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-camel text-sm font-semibold">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-ebony/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-toffee_brown to-camel rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-ebony/50 rounded-2xl border border-dusty_olive/30 p-8 md:p-12 mb-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-khaki_beige-900 font-comfortaa">
                    {currentQuestion.question}
                  </h2>
                  <p className="text-dry_sage-600 text-lg">{currentQuestion.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const Icon = option.icon;
                    const isSelected = answers[currentQuestion.id] === option.value;
                    
                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                          isSelected
                            ? 'border-camel bg-camel/10 shadow-lg'
                            : 'border-dusty_olive/30 hover:border-camel/50 bg-charcoal_brown/30'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            isSelected 
                              ? 'bg-gradient-to-br from-toffee_brown to-camel' 
                              : 'bg-ebony/50'
                          }`}>
                            <Icon className={isSelected ? 'text-charcoal_brown' : 'text-toffee_brown'} size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-2 ${
                              isSelected ? 'text-camel' : 'text-khaki_beige-900'
                            }`}>
                              {option.label}
                            </h3>
                            <p className="text-dry_sage-600 text-sm">{option.description}</p>
                          </div>
                          {isSelected && (
                            <CheckCircle className="text-camel flex-shrink-0" size={24} />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-dusty_olive/30 text-dry_sage-700 hover:border-camel/50 hover:text-camel transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft size={20} />
                    Previous
                  </button>
                  
                  {answers[currentQuestion.id] && (
                    <motion.button
                      onClick={() => {
                        if (currentStep < questions.length - 1) {
                          setCurrentStep(currentStep + 1);
                        } else {
                          generateRecommendations(answers);
                        }
                      }}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-toffee_brown to-saddle_brown hover:from-saddle_brown hover:to-toffee_brown text-khaki_beige-900 font-semibold transition-all duration-300"
                    >
                      {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
                      <ArrowRight size={20} />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* What NOT to Build */}
            <div className="bg-ebony/50 rounded-2xl border border-dusty_olive/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-saddle_brown to-dark_walnut">
                  <XCircle className="text-khaki_beige-900" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-khaki_beige-900 font-comfortaa">
                  What NOT to Build
                </h2>
              </div>
              <ul className="space-y-3">
                {recommendations.whatNotToBuild.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-dry_sage-700"
                  >
                    <span className="text-saddle_brown mt-1">✗</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Where You'll Waste Money */}
            <div className="bg-ebony/50 rounded-2xl border border-dusty_olive/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-dark_walnut to-saddle_brown">
                  <AlertTriangle className="text-khaki_beige-900" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-khaki_beige-900 font-comfortaa">
                  Where You'll Waste Money
                </h2>
              </div>
              <ul className="space-y-3">
                {recommendations.wasteMoney.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-dry_sage-700"
                  >
                    <span className="text-dark_walnut mt-1">⚠</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Smart Approach */}
            <div className="bg-gradient-to-br from-ebony/50 to-charcoal_brown/50 rounded-2xl border border-camel/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-toffee_brown to-camel">
                  <Lightbulb className="text-charcoal_brown" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-khaki_beige-900 font-comfortaa">
                  Smart Approach
                </h2>
              </div>
              <ul className="space-y-3">
                {recommendations.smartApproach.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-dry_sage-700"
                  >
                    <span className="text-camel mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Reset Button */}
            <div className="text-center pt-6">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-toffee_brown to-saddle_brown hover:from-saddle_brown hover:to-toffee_brown text-khaki_beige-900 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Over
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

