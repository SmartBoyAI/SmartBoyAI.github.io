// =================================================================
// Pricing Toggle - Monthly/Yearly Switch
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializePricingToggle();
});

function initializePricingToggle() {
    const toggle = document.getElementById('pricingToggle');
    const premiumPrice = document.getElementById('premiumPrice');
    const premiumPeriod = document.getElementById('premiumPeriod');
    const premiumSavings = document.getElementById('premiumSavings');
    
    if (!toggle || !premiumPrice || !premiumPeriod) {
        return; // Elements not found
    }
    
    // Pricing data
    const pricing = {
        monthly: {
            price: '4.99',
            period: '/month',
            savings: '',
            annualEquivalent: 59.88
        },
        yearly: {
            price: '39.99',
            period: '/year',
            savings: 'Save $19.89 (33% off)',
            monthlySavings: '$3.33/month'
        }
    };
    
    // Toggle event listener
    toggle.addEventListener('change', function() {
        const isYearly = this.checked;
        
        if (isYearly) {
            updatePricing(pricing.yearly);
            animatePriceChange(premiumPrice, pricing.monthly.price, pricing.yearly.price);
        } else {
            updatePricing(pricing.monthly);
            animatePriceChange(premiumPrice, pricing.yearly.price, pricing.monthly.price);
        }
    });
    
    // Set initial state (monthly)
    updatePricing(pricing.monthly);
}

function updatePricing(plan) {
    const premiumPrice = document.getElementById('premiumPrice');
    const premiumPeriod = document.getElementById('premiumPeriod');
    const premiumSavings = document.getElementById('premiumSavings');
    
    premiumPeriod.textContent = plan.period;
    
    if (plan.savings) {
        premiumSavings.innerHTML = `
            <span style="color: var(--accent-color); font-weight: 600;">
                ${plan.savings}
            </span><br>
            <span style="font-size: 0.875rem; color: var(--gray-600);">
                Only ${plan.monthlySavings}
            </span>
        `;
    } else {
        premiumSavings.innerHTML = '&nbsp;'; // Maintain height
    }
}

function animatePriceChange(element, fromPrice, toPrice) {
    // Convert prices to numbers
    const from = parseFloat(fromPrice);
    const to = parseFloat(toPrice);
    const duration = 500; // Animation duration in ms
    const steps = 30;
    const stepDuration = duration / steps;
    const increment = (to - from) / steps;
    
    let current = from;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= steps) {
            element.textContent = to.toFixed(2);
            clearInterval(timer);
        } else {
            element.textContent = current.toFixed(2);
        }
    }, stepDuration);
}

// =================================================================
// Pricing Card Comparison Highlight
// =================================================================

function highlightPricingFeatures() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const features = card.querySelectorAll('.pricing-features li');
        
        features.forEach((feature, index) => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-10px)';
            
            setTimeout(() => {
                feature.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
            }, index * 50);
        });
    });
}

// Trigger feature highlight when pricing section is visible
if ('IntersectionObserver' in window) {
    const pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlightPricingFeatures();
                pricingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    document.addEventListener('DOMContentLoaded', () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingObserver.observe(pricingSection);
        }
    });
}

// =================================================================
// Pricing Calculator (Optional Feature)
// =================================================================

function createPricingCalculator() {
    const pricingData = {
        free: {
            monthly: 0,
            yearly: 0,
            questionsPerDay: 5
        },
        premium: {
            monthly: 4.99,
            yearly: 39.99,
            questionsPerDay: 'unlimited'
        },
        family: {
            monthly: null, // Not available
            yearly: 59.99,
            questionsPerDay: 'unlimited',
            children: 4
        }
    };
    
    function calculateSavings(tier, isYearly) {
        if (tier === 'free' || !isYearly || !pricingData[tier].monthly) {
            return 0;
        }
        
        const monthlyAnnual = pricingData[tier].monthly * 12;
        const yearlyPrice = pricingData[tier].yearly;
        return monthlyAnnual - yearlyPrice;
    }
    
    function calculatePerChildCost(tier, isYearly, childrenCount = 1) {
        const price = isYearly ? pricingData[tier].yearly : pricingData[tier].monthly;
        
        if (tier === 'family') {
            return price / pricingData.family.children;
        }
        
        return price / childrenCount;
    }
    
    return {
        calculateSavings,
        calculatePerChildCost,
        pricingData
    };
}

// =================================================================
// Pricing Recommendation Engine
// =================================================================

function getPricingRecommendation(childrenCount, usageLevel) {
    /*
     * childrenCount: number of children
     * usageLevel: 'light' | 'moderate' | 'heavy'
     */
    
    if (childrenCount === 1) {
        if (usageLevel === 'light') {
            return {
                tier: 'free',
                reason: 'Free tier is perfect for occasional practice with 5 questions per day.'
            };
        } else {
            return {
                tier: 'premium',
                reason: 'Premium offers unlimited questions and advanced features for serious learners.',
                billing: 'yearly' // Recommend yearly for savings
            };
        }
    } else if (childrenCount >= 2 && childrenCount <= 4) {
        return {
            tier: 'family',
            reason: `Family plan is the best value for ${childrenCount} children at just $${(59.99 / childrenCount).toFixed(2)} per child per year.`,
            billing: 'yearly'
        };
    } else {
        return {
            tier: 'premium',
            reason: 'For more than 4 children, multiple Premium subscriptions might be more flexible.',
            note: 'Contact us for enterprise/school pricing options.'
        };
    }
}

// =================================================================
// Pricing Tooltip
// =================================================================

function addPricingTooltips() {
    const tooltipData = {
        'unlimited-questions': 'Generate as many AI-powered questions as you need, anytime.',
        'offline-mode': 'Download content and practice without internet connection.',
        'ai-help': 'Get instant AI assistance with step-by-step explanations and visual aids.',
        'performance-reports': 'Comprehensive analytics showing strengths, weaknesses, and improvement areas.',
        'priority-support': 'Get faster responses to your questions and issues.'
    };
    
    Object.keys(tooltipData).forEach(key => {
        const elements = document.querySelectorAll(`[data-tooltip="${key}"]`);
        
        elements.forEach(el => {
            el.style.position = 'relative';
            el.style.cursor = 'help';
            
            el.addEventListener('mouseenter', () => {
                const tooltip = document.createElement('div');
                tooltip.className = 'pricing-tooltip';
                tooltip.textContent = tooltipData[key];
                tooltip.style.cssText = `
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--gray-900);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    white-space: nowrap;
                    z-index: 1000;
                    margin-bottom: 8px;
                    box-shadow: var(--shadow-lg);
                `;
                
                el.appendChild(tooltip);
            });
            
            el.addEventListener('mouseleave', () => {
                const tooltip = el.querySelector('.pricing-tooltip');
                if (tooltip) tooltip.remove();
            });
        });
    });
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', addPricingTooltips);

// =================================================================
// Pricing Card Hover Effects
// =================================================================

function enhancePricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Highlight this card
            this.style.transform = 'translateY(-12px) scale(1.02)';
            
            // Dim other cards
            pricingCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
}

// Initialize on desktop only
if (window.innerWidth > 768) {
    document.addEventListener('DOMContentLoaded', enhancePricingCards);
}

// =================================================================
// Export pricing utilities
// =================================================================

window.SmartBoyPricing = {
    calculator: createPricingCalculator(),
    getRecommendation: getPricingRecommendation
};

// =================================================================
// Pricing FAQs Integration
// =================================================================

function linkPricingToFAQ() {
    // Add click handlers to pricing cards to jump to relevant FAQ
    const faqLinks = {
        'free': 6, // "How much does it cost?" FAQ index
        'premium': 6,
        'family': 3  // "Can multiple children use one account?" FAQ index
    };
    
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        const tier = ['free', 'premium', 'family'][index];
        
        // Add info icon that links to FAQ
        const infoIcon = document.createElement('button');
        infoIcon.innerHTML = '<i class="fas fa-info-circle"></i> Learn more';
        infoIcon.className = 'pricing-faq-link';
        infoIcon.style.cssText = `
            display: block;
            margin: 16px auto 0;
            color: var(--primary-color);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
            transition: color 0.2s;
        `;
        
        infoIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const faqSection = document.getElementById('faq');
            const faqItems = document.querySelectorAll('.faq-item');
            const targetFaq = faqItems[faqLinks[tier]];
            
            if (faqSection && targetFaq) {
                // Scroll to FAQ section
                faqSection.scrollIntoView({ behavior: 'smooth' });
                
                // Open the relevant FAQ after a delay
                setTimeout(() => {
                    targetFaq.querySelector('.faq-question').click();
                }, 800);
            }
        });
        
        card.querySelector('.btn').parentNode.insertBefore(infoIcon, card.querySelector('.btn').nextSibling);
    });
}

// Initialize pricing-FAQ linking
document.addEventListener('DOMContentLoaded', linkPricingToFAQ);
