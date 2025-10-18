import React, { useState } from 'react';
import { Check, X, Shield, Sparkles, Crown, ArrowRight, CreditCard, Lock, Calendar, Gift, TrendingUp, Zap, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

interface CheckoutFormData {
  email: string;
  fullName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
  city: string;
  zipCode: string;
  country: string;
}

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<'pricing' | 'checkout' | 'processing' | 'success'>('pricing');
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started with basic productivity features',
      icon: <Calendar className="h-7 w-7" />,
      color: 'text-gray-600',
      gradient: 'from-gray-400 to-gray-600',
      features: [
        'Built-in calendar system',
        'Basic task management',
        'Up to 50 events per month',
        'Email reminders',
        'Mobile app access',
        'Basic AI assistance (5 queries/day)'
      ],
      limitations: [
        'No Google Calendar sync',
        'Limited AI features',
        'Basic support only',
        'No advanced analytics'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: billingCycle === 'monthly' ? 20 : 200,
      originalPrice: billingCycle === 'yearly' ? 240 : undefined,
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      description: 'Unlock the full power of AI-driven productivity',
      icon: <Sparkles className="h-7 w-7" />,
      color: 'text-blue-600',
      gradient: 'from-blue-500 to-indigo-600',
      popular: true,
      features: [
        'Everything in Free',
        'Unlimited events and tasks',
        'Google Calendar integration',
        'Advanced AI assistant (unlimited)',
        'Smart scheduling suggestions',
        'Productivity analytics',
        'Priority email support',
        'Custom reminders and notifications',
        'Multi-device sync',
        'Export and backup features'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 50 : 500,
      originalPrice: billingCycle === 'yearly' ? 600 : undefined,
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      description: 'Advanced features for teams and organizations',
      icon: <Crown className="h-7 w-7" />,
      color: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      features: [
        'Everything in Premium',
        'Team collaboration features',
        'Advanced admin controls',
        'Custom integrations',
        'Dedicated account manager',
        'Phone support',
        'Custom branding',
        'Advanced security features',
        'API access',
        'Custom reporting',
        'SSO integration',
        'Unlimited team members'
      ]
    }
  ];

  const handlePlanSelect = (plan: PricingPlan) => {
    if (plan.id === 'free') {
      setSelectedPlan(plan);
      setCheckoutStep('success');
    } else {
      setSelectedPlan(plan);
      setCheckoutStep('checkout');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setCheckoutStep('processing');

    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutStep('success');
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (checkoutStep === 'processing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Payment</h2>
          <p className="text-gray-600 mb-6">Please wait while we securely process your payment...</p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Lock className="h-4 w-4 mr-2" />
              256-bit SSL Encryption
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (checkoutStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedPlan?.id === 'free' ? 'Welcome to MAIPA!' : 'Payment Successful!'}
          </h2>
          <p className="text-gray-600 mb-6">
            {selectedPlan?.id === 'free'
              ? 'Your free account is ready to use. Start organizing your schedule today!'
              : `Welcome to ${selectedPlan?.name}! Your subscription is now active.`
            }
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Download the mobile app</li>
              <li>• Set up your first calendar events</li>
              <li>• Explore AI assistant features</li>
              {selectedPlan?.id !== 'free' && <li>• Connect your Google Calendar</li>}
            </ul>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Now
          </button>
        </div>
      </div>
    );
  }

  if (checkoutStep === 'checkout' && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Your Purchase</h1>
            <p className="text-lg text-gray-600">You're just one step away from unlocking premium features</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className={`bg-gradient-to-r ${selectedPlan.gradient} p-6 rounded-2xl text-white mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {selectedPlan.icon}
                    <h3 className="text-xl font-bold ml-3">{selectedPlan.name}</h3>
                  </div>
                  {selectedPlan.popular && (
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-white/90 mb-4">{selectedPlan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${selectedPlan.price}</span>
                  <span className="text-white/80 ml-2">/{selectedPlan.period}</span>
                  {selectedPlan.originalPrice && (
                    <span className="text-white/60 line-through ml-3">${selectedPlan.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${selectedPlan.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold text-blue-600">${selectedPlan.price}</span>
                  </div>
                </div>
              </div>

              {billingCycle === 'yearly' && selectedPlan.originalPrice && (
                <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Gift className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      You save ${selectedPlan.originalPrice - selectedPlan.price} with annual billing!
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h2>

              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      const formatted = formatCardNumber(e.target.value);
                      setFormData(prev => ({ ...prev, cardNumber: formatted }));
                    }}
                    required
                    maxLength={19}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => {
                        const formatted = formatExpiryDate(e.target.value);
                        setFormData(prev => ({ ...prev, expiryDate: formatted }));
                      }}
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      maxLength={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center text-sm text-gray-600">
                    <Shield className="h-4 w-4 mr-2" />
                    Your payment information is encrypted and secure
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('pricing')}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Back to Plans
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Purchase
                        <CreditCard className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 pt-20 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Start free, upgrade when you're ready. All plans include our core features.
            </p>

            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-2xl flex items-center">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border-2 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`bg-gradient-to-r ${plan.gradient} text-white p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 min-h-12">{plan.description}</p>

                    <div className="mb-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period.split(' ')[1] || plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="mt-2 flex items-center justify-center gap-2">
                          <span className="text-gray-500 line-through text-sm">${plan.originalPrice}</span>
                          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                            Save ${plan.originalPrice - plan.price}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <span className="ml-3 text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations?.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                        <span className="ml-3 text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : plan.id === 'free'
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    }`}
                  >
                    {plan.id === 'free' ? 'Get Started Free' : `Get ${plan.name}`}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial for premium plans?",
                answer: "We offer a generous free plan that you can use indefinitely. You can upgrade to premium features at any time without losing your data."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely with 256-bit SSL encryption."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely! You can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all premium plans. If you're not satisfied, contact our support team for a full refund."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <Zap className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who have transformed their daily workflow with MAIPA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handlePlanSelect(plans[0])}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Start Free Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button
              onClick={() => handlePlanSelect(plans[1])}
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              View All Plans
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
