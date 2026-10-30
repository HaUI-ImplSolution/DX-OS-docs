import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const cards = [
  {
    title: 'Vận hành và triển khai',
    text: 'Cấu hình Cloudflare cho máy chủ công khai và danh sách việc tồn đọng của dự án.',
    to: '/docs/cloudflare',
  },
  {
    title: 'Đánh giá',
    text: 'Đánh giá model AI và bảng rà soát PoF theo đề thi và phiếu chấm.',
    to: '/docs/ai-evaluation',
  },
  {
    title: 'Cuộc thi',
    text: 'Hồ sơ nộp bài, kịch bản demo 10 phút, câu hỏi hội đồng và sườn báo cáo kỹ thuật.',
    to: '/docs/submission',
  },
  {
    title: 'Tham chiếu',
    text: 'Đề thi, phiếu đánh giá, thiết kế gốc và mẫu tài liệu theo phase.',
    to: '/docs/reference/',
  },
];

export default function Home() {
  return (
    <Layout title="DX-OS Docs" description="Tài liệu của DX-OS: DX-Farm và DX-Lab">
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1" className={styles.title}>DX-OS Docs</Heading>
          <p className={styles.tagline}>
            Nền tảng mã nguồn mở dùng chung cho chuyển đổi số: một lõi, hai ứng dụng DX-Farm và DX-Lab.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">Bắt đầu</Link>
            <Link className="button button--secondary button--lg" href="https://github.com/HaUI-ImplSolution/DX-OS">
              Mã nguồn trên GitHub
            </Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          {cards.map((card) => (
            <div key={card.title} className="col col--6 margin-bottom--md">
              <Link to={card.to} className={styles.card}>
                <Heading as="h3">{card.title}</Heading>
                <p>{card.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
