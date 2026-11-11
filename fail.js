// あえて問題だらけにしたテスト用ファイル

function processUserData(user) {
  // 1. var の使用（モダンな開発では const / let が推奨される）
  var name = user.name;

  // 2. 緩い比較 '==' の使用（型チェックが含まれない）
  if (user.age == "20") {
    console.log("ユーザーは20歳です");
  }

  // 3. パスワードをコンソールに出力（セキュリティ上のリスク）
  console.log("DEBUG: ユーザーのパスワードは " + user.password);

  // 4. console.log の消し忘れ（プロダクションコードへの混入）
  // 5. 存在しないプロパティへのアクセス（user.addressが未定義の場合、エラーになる危険性）
  var zipCode = user.address.zip;

  // 6. デッドコード（絶対に実行されない処理）
  return zipCode;
  console.log("ここは実行されません");
}

// 7. グローバルスコープでの危うい処理と、エラーハンドリング（try-catch）の欠如
const data = null;
// userがnullなので、上記の関数に渡すと確実にランタイムエラーが発生します
processUserData(data);
