'use client';

import { useTranslations } from 'next-intl';

export default function TransLationTest() {
  const t = useTranslations('common'); // common 객체의 번역을 가져옴

  return <div>{t('안녕')}</div>;
}
