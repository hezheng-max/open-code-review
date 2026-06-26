import React from 'react';
import { useTranslation } from '../i18n';
import ocrIcon1 from '../assets/images/容器-4_9c88f0.svg';
import ocrIcon2 from '../assets/images/容器-4_2aef28.svg';
import ocrIcon3 from '../assets/images/容器-4_dea526.svg';
import ocrIcon4 from '../assets/images/容器-4_0d7ff8.svg';
import ocrIcon5 from '../assets/images/容器-4_a52b60.svg';
import ocrIcon6 from '../assets/images/容器-4_9ceae3.svg';
import ocrIcon7 from '../assets/images/容器-4_2ed867.svg';
import sortIcon from '../assets/icons/svg_5824ce0f.svg';
import bestIcon from '../assets/icons/svg_3eb696c7.svg';

interface BenchmarkRow {
  rank: number;
  model: string;
  provider: string;
  source: string;
  sourceIcon?: string;
  f1: string;
  precision: string;
  precisionDetail: string;
  recall: string;
  recallDetail: string;
  avgTime: string;
  avgToken: string;
  tokenDetail: string;
  highlighted?: boolean;
  hasBest?: boolean;
}

const rows: BenchmarkRow[] = [
  { rank: 1, model: 'Claude-4.6-Opus', provider: 'Anthropic', source: 'Open Code Review', sourceIcon: ocrIcon1, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K', highlighted: true, hasBest: true },
  { rank: 2, model: 'GLM-5.2', provider: 'Zhipu AI', source: 'Open Code Review', sourceIcon: ocrIcon2, f1: '21.30%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K', highlighted: true, hasBest: true },
  { rank: 3, model: 'Qwen3.7-Max', provider: 'Alibaba', source: 'Open Code Review', sourceIcon: ocrIcon3, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K', highlighted: true },
  { rank: 4, model: 'GPT-5.5', provider: 'OpenAI', source: 'Open Code Review', sourceIcon: ocrIcon4, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 5, model: 'GLM-5.1', provider: 'OpenAI', source: 'Open Code Review', sourceIcon: ocrIcon5, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 6, model: 'GPT-5.5', provider: 'OpenAI', source: 'Open Code Review', sourceIcon: ocrIcon6, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K', hasBest: true },
  { rank: 7, model: 'GPT-5.5', provider: 'OpenAI', source: 'Open Code Review', sourceIcon: ocrIcon7, f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 8, model: 'GPT-5.5', provider: 'OpenAI', source: 'Claude Code', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 9, model: 'GPT-5.5', provider: 'OpenAI', source: 'Claude Code', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 10, model: 'GPT-5.5', provider: 'OpenAI', source: 'Claude Code', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 11, model: 'GPT-5.5', provider: 'OpenAI', source: 'Claude Code', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 12, model: 'GPT-5.5', provider: 'OpenAI', source: 'Claude Code', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
  { rank: 13, model: 'GPT-5.5', provider: 'OpenAI', source: 'Codex', f1: '25.10%', precision: '33.90%', precisionDetail: '301/889', recall: '20.00%', recallDetail: '301/1505', avgTime: '1m23s', avgToken: '385K', tokenDetail: '375K / 10K' },
];

const BenchmarkSection: React.FC = () => {
  const { t } = useTranslation();

  const headerCols = [
    t('benchmark.colRank'), t('benchmark.colModel'), t('benchmark.colSource'),
    t('benchmark.colF1'), t('benchmark.colPrecision'), t('benchmark.colRecall'),
    t('benchmark.colAvgTime'), t('benchmark.colAvgToken'),
  ];

  return (
    <section
      id="benchmark"
      style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '120px 0', overflow: 'hidden' }}
    >
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#2BDE5E', fontSize: 16, fontWeight: 500, letterSpacing: '0.48px' }}>
            {t('benchmark.sectionLabel')}
          </span>
          <h2 style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 500, textAlign: 'center', lineHeight: '52px', letterSpacing: '0.96px', margin: 0, maxWidth: 758 }}>
            {t('benchmark.title')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, textAlign: 'center', lineHeight: '24px', margin: 0, maxWidth: 646 }}>
            {t('benchmark.subtitle')}
          </p>
        </div>

        {/* Table */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 8, overflow: 'hidden' }}>
          {/* Table Header */}
          <div style={{
            width: 1200,
            display: 'flex',
            alignItems: 'flex-start',
            borderStyle: 'solid',
            borderColor: 'rgba(255,255,255,0.16)',
            borderTopWidth: 0,
            borderBottomWidth: 1,
            borderRightWidth: 0,
            borderLeftWidth: 0,
          }}>
            {headerCols.map((col, i) => (
              <div
                key={col}
                style={{
                  width: i === 0 ? 120 : i === 1 ? 200 : i === 2 ? 200 : undefined,
                  flex: i > 2 ? 1 : undefined,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: i === 0 ? '10px 20px' : '10px 12px',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500, letterSpacing: '0.5px' }}>
                  {col}
                </span>
                {(col === 'F1' || col === 'PRECISION' || col === 'RECALL') && (
                  <img src={sortIcon} alt="" style={{ width: 14, height: 14 }} />
                )}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          {rows.map((row) => {
            const bgOpacity = row.rank === 1 ? 0.25 : row.rank === 2 ? 0.18 : row.rank === 3 ? 0.1 : 0;
            return (
              <div
                key={row.rank}
                style={{
                  width: 1200,
                  display: 'flex',
                  alignItems: 'center',
                  background: bgOpacity > 0 ? `rgba(43,222,94,${bgOpacity})` : 'transparent',
                  borderStyle: 'solid',
                  borderColor: 'rgba(255,255,255,0.16)',
                  borderTopWidth: 0,
                  borderBottomWidth: row.rank === rows.length ? 0 : 1,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  overflow: 'hidden',
                }}
              >
                {/* Rank */}
                <div style={{ width: 120, padding: '10px 20px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontFamily: 'Menlo, monospace' }}>
                    {row.rank}
                  </span>
                </div>
                {/* Model */}
                <div style={{ width: 200, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 500 }}>{row.model}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12 }}>{row.provider}</span>
                </div>
                {/* Source */}
                <div style={{ width: 200, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {row.sourceIcon && <img src={row.sourceIcon} alt="" style={{ width: 20, height: 20 }} />}
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{row.source}</span>
                </div>
                {/* F1 */}
                <div style={{ flex: 1, padding: '10px 12px' }}>
                  <span style={{ color: '#FFFFFF', fontSize: 14 }}>{row.f1}</span>
                </div>
                {/* Precision */}
                <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#FFFFFF', fontSize: 14 }}>{row.precision}</span>
                    {row.hasBest && <img src={bestIcon} alt="" style={{ width: 16, height: 16, marginLeft: 4 }} />}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{row.precisionDetail}</span>
                </div>
                {/* Recall */}
                <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#FFFFFF', fontSize: 14 }}>{row.recall}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{row.recallDetail}</span>
                </div>
                {/* Avg Time */}
                <div style={{ flex: 1, padding: '10px 12px' }}>
                  <span style={{ color: '#FFFFFF', fontSize: 14 }}>{row.avgTime}</span>
                </div>
                {/* Avg Token */}
                <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#FFFFFF', fontSize: 14 }}>{row.avgToken}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{row.tokenDetail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textAlign: 'center', margin: 0, marginTop: -24 }}>
          Open Code Review · v1.3.1 ｜ Claude Code · v2.1.169 · /code-review ｜ Codex · v0.140.0 · /review
        </p>
      </div>
    </section>
  );
};

export default BenchmarkSection;
