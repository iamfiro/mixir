module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "references-empty": [2, "never"], // 이슈 참조가 반드시 있어야 함
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "docs", // 문서 변경
        "style", // 코드 포맷팅
        "refactor", // 리팩토링
        "test", // 테스트 추가/수정
        "chore", // 기타 작업
      ],
    ],
    "scope-case": [2, "always", "lower-case"], // 소문자로 scope 작성
    "subject-case": [2, "always", "sentence-case"], // 커밋 메시지는 문장처럼
    "footer-leading-blank": [1, "always"], // footer 앞 빈 줄
  },
};
