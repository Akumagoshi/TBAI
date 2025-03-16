import { getServiceImage } from './imageConfig';

export const services = [
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    shortDescription: 'Automate repetitive tasks and workflows to increase efficiency and reduce errors.',
    longDescription: 'Our Business Process Automation services help SMEs identify, optimize, and automate repetitive tasks and workflows. By leveraging AI and automation technologies, we help businesses increase efficiency, reduce errors, and free up valuable time for their teams to focus on strategic initiatives.',
    imageUrl: getServiceImage('business-process-automation'),
    features: [
      { 
        title: 'Workflow Analysis', 
        description: 'Comprehensive analysis of existing workflows to identify automation opportunities.', 
        icon: '📊' 
      },
      { 
        title: 'Custom Automation Solutions', 
        description: 'Tailored automation solutions designed specifically for your business processes.', 
        icon: '⚙️' 
      },
      { 
        title: 'Integration Support', 
        description: 'Seamless integration with your existing systems and software.', 
        icon: '🔄' 
      },
      { 
        title: 'ROI Assessment', 
        description: 'Clear measurement of time and cost savings from automation implementations.', 
        icon: '💰' 
      },
    ],
    benefits: [
      'Reduce manual data entry by up to 90%',
      'Minimize human error in critical business processes',
      'Free up employee time for higher-value tasks',
      'Accelerate process completion times',
      'Improve consistency and standardization'
    ],
    ctaText: 'Automate Your Business Processes',
    ctaLink: '/contact',
  },
  {
    id: 'business-process-documentation',
    title: 'Business Process Documentation',
    shortDescription: 'Document, standardize, and optimize your business processes for consistency and training.',
    longDescription: 'Our Business Process Documentation services help SMEs capture, standardize, and optimize their processes. Well-documented processes improve training, ensure consistency, and form the foundation for continuous improvement and automation initiatives.',
    imageUrl: getServiceImage('business-process-documentation'),
    features: [
      { 
        title: 'Process Mapping', 
        description: 'Visual documentation of workflows using industry-standard notations.', 
        icon: '🗺️' 
      },
      { 
        title: 'Standard Operating Procedures', 
        description: 'Development of clear, actionable SOPs for key business processes.', 
        icon: '📝' 
      },
      { 
        title: 'Knowledge Base Creation', 
        description: 'Implementation of searchable, accessible process documentation systems.', 
        icon: '🧠' 
      },
      { 
        title: 'Training Materials', 
        description: 'Creation of training materials based on documented processes.', 
        icon: '📚' 
      },
    ],
    benefits: [
      'Maintain consistent quality standards',
      'Simplify employee training and onboarding',
      'Preserve institutional knowledge',
      'Identify process bottlenecks and improvement opportunities',
      'Prepare for process automation and scaling'
    ],
    ctaText: 'Document Your Business Processes',
    ctaLink: '/contact',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDescription: 'Leverage the power of AI to automate complex tasks that require decision-making capabilities.',
    longDescription: 'Our AI Automation services help SMEs apply artificial intelligence to automate complex tasks that traditionally required human decision-making. By leveraging machine learning, natural language processing, and other AI technologies, we help businesses achieve higher levels of automation for knowledge work and cognitive tasks.',
    imageUrl: getServiceImage('ai-automation'),
    features: [
      { 
        title: 'AI Assessment', 
        description: 'Evaluation of processes suitable for AI automation and expected ROI.', 
        icon: '🤖' 
      },
      { 
        title: 'Natural Language Processing', 
        description: 'Automation of text analysis, document processing, and communication tasks.', 
        icon: '💬' 
      },
      { 
        title: 'Predictive Analytics', 
        description: 'Implementation of AI to forecast trends and make data-driven decisions.', 
        icon: '📈' 
      },
      { 
        title: 'Intelligent Process Automation', 
        description: 'Combination of RPA with AI for end-to-end process automation.', 
        icon: '⚡' 
      },
    ],
    benefits: [
      'Automate complex decision-making processes',
      'Extract insights from unstructured data',
      'Improve customer interactions with AI-powered tools',
      'Enhance forecasting and planning capabilities',
      'Stay ahead of competitors with cutting-edge technology'
    ],
    ctaText: 'Explore AI Automation',
    ctaLink: '/contact',
  },
];

export function getServiceById(id) {
  return services.find(service => service.id === id);
}

export function getAllServiceIds() {
  return services.map(service => service.id);
}
