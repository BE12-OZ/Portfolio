import styles from './AboutSection.module.scss'; // Import the SCSS module
import QnaBlock from './QnaBlock'; // Import the new QnaBlock component

export default function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <QnaBlock 
        q="프론트엔드를 선택한 이유는?" 
        a="사용자가 즉시 반응을 느끼는 인터페이스 제작에 큰 매력을 느껴서입니다." 
      />
      <QnaBlock 
        q="코드를 대하는 태도는?" 
        a="지속 가능한 구조, 명확한 의도, 직관적인 흐름을 중시합니다." 
      />
      <QnaBlock 
        q="새로운 기술을 배우고 동료들과 지식을 공유하는 것을 즐기며, 함께 성장하는 개발 문화를 지향합니다." 
        a="이 포트폴리오는 저의 경험과 기술, 그리고 열정을 담아낸 공간입니다." 
      />
    </div>
  );
}
