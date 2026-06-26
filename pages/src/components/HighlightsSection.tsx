import React from 'react';
import { useTranslation } from '../i18n';

const HighlightsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t('highlights.stat1Value'), label: t('highlights.stat1Label'), caption: t('highlights.stat1Caption') },
    { value: t('highlights.stat2Value'), label: t('highlights.stat2Label'), caption: t('highlights.stat2Caption') },
    { value: t('highlights.stat3Value'), label: t('highlights.stat3Label'), caption: t('highlights.stat3Caption') },
    { value: t('highlights.stat4Value'), label: t('highlights.stat4Label'), caption: t('highlights.stat4Caption') },
    { value: t('highlights.stat5Value'), label: t('highlights.stat5Label'), caption: t('highlights.stat5Caption') },
  ];

  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '120px 120px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              width: 164,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                fontSize: 40,
                fontWeight: 600,
                lineHeight: '48px',
              }}
            >
              {stat.value}
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 8,
              }}
            >
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 12,
                  textAlign: 'center',
                  lineHeight: '16px',
                  marginTop: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
