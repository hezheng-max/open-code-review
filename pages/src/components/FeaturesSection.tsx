import React from 'react';
import { useTranslation } from '../i18n';
import icon1 from '../assets/icons/svg_d445cd56.svg';
import icon2 from '../assets/icons/svg_16f21c54.svg';
import icon3 from '../assets/icons/svg_0d75d088.svg';
import icon4 from '../assets/icons/svg_d61bb6bc.svg';
import icon5 from '../assets/icons/svg_208b117d.svg';
import icon6 from '../assets/icons/svg_2bf95464.svg';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: icon1, title: t('features.feat1Title'), desc: t('features.feat1Desc') },
    { icon: icon2, title: t('features.feat2Title'), desc: t('features.feat2Desc') },
    { icon: icon3, title: t('features.feat3Title'), desc: t('features.feat3Desc') },
    { icon: icon4, title: t('features.feat4Title'), desc: t('features.feat4Desc') },
    { icon: icon5, title: t('features.feat5Title'), desc: t('features.feat5Desc') },
    { icon: icon6, title: t('features.feat6Title'), desc: t('features.feat6Desc') },
  ];

  return (
    <section
      id="features"
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
          <span style={{ color: '#2BDE5E', fontSize: 16, fontWeight: 500, lineHeight: '22px', letterSpacing: '0.48px' }}>
            {t('features.sectionBadge')}
          </span>
          <h2 style={{ color: '#FFFFFF', fontSize: 48, fontWeight: 500, textAlign: 'center', lineHeight: '52px', letterSpacing: '0.96px', margin: 0, maxWidth: 758 }}>
            {t('features.title')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, textAlign: 'center', lineHeight: '24px', margin: 0, maxWidth: 646 }}>
            {t('features.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 8,
          }}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                borderRight: (i % 3 !== 2) ? '1px solid rgba(255,255,255,0.16)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.16)' : 'none',
                minHeight: 272,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.16)',
                }}
              >
                <img src={feat.icon} alt="" style={{ width: 24, height: 24 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 500, margin: 0, maxWidth: 352 }}>
                  {feat.title}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: '20px', margin: 0, maxWidth: 352 }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
