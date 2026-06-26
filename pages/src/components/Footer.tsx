import React from 'react';
import githubIcon from '../assets/icons/svg_a1bab8ca.svg';
import { useTranslation } from '../i18n/context';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        width: '100%',
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '64px 120px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <img src={githubIcon} alt="" style={{ width: 18, height: 18 }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{t('footer.brand')}</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
          {t('footer.copyright')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
