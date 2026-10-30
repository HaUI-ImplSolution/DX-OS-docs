// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Vận hành và triển khai',
      collapsed: false,
      items: ['cloudflare', 'backlog'],
    },
    {
      type: 'category',
      label: 'Đánh giá',
      collapsed: false,
      items: ['ai-evaluation', 'pof-audit'],
    },
    {
      type: 'category',
      label: 'Cuộc thi',
      collapsed: false,
      items: ['submission', 'council-qa', 'technical-report'],
    },
    {
      type: 'category',
      label: 'Tài liệu tham chiếu',
      collapsed: true,
      items: ['reference/index'],
    },
    {
      type: 'category',
      label: 'Mẫu tài liệu theo phase',
      collapsed: true,
      items: [
        'templates/index',
        'templates/overview',
        'templates/plan',
        'templates/checklist',
        'templates/test-plan',
        'templates/tradeoffs-risks',
      ],
    },
  ],
};

export default sidebars;
