import React from 'react';
import { useTranslation } from '../i18n';

const UseCasesSection: React.FC = () => {
  const { t } = useTranslation();

  const useCases = [
    { title: t('usecases.case1Title'), desc: t('usecases.case1Desc'), highlighted: true },
    { title: t('usecases.case2Title'), desc: t('usecases.case2Desc'), highlighted: false },
    { title: t('usecases.case3Title'), desc: t('usecases.case3Desc'), highlighted: false },
  ];

  return (
    <section
      id="usecases"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: 48 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              color: '#2BDE5E',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '22px',
              letterSpacing: '0.48px',
            }}
          >
            {t('usecases.sectionLabel')}
          </span>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 48,
              fontWeight: 500,
              textAlign: 'center',
              lineHeight: '52px',
              letterSpacing: '0.96px',
              margin: 0,
            }}
          >
            {t('usecases.title')}
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 1 }}>
          {useCases.map((item, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '48px 32px',
                borderRadius: 8,
                border: item.highlighted
                  ? '1px solid transparent'
                  : '1px solid rgba(255,255,255,0.08)',
                background: item.highlighted
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.14) 0%, #141313 100%)'
                  : 'transparent',
                borderImage: item.highlighted
                  ? 'linear-gradient(143deg, #31FF75 1%, #33DDF7 14%, rgba(55,252,170,0.79) 32%, rgba(255,255,255,0) 49%) 1'
                  : undefined,
              }}
            >
              {/* Icon placeholder */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  marginBottom: 24,
                  borderRadius: '50%',
                  background: 'rgba(43,222,94,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2BDE5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p
                  style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    lineHeight: '20px',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
