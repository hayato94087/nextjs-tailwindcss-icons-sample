export default function Home() {
  return (
    <main>
      {/* サイズ指定 */}
      <span className="i-lucide-cat"></span>
      <span className="i-lucide-cat w-5 h-5"></span>
      <span className="i-lucide-cat w-7 h-7"></span>
      <br/>
      {/* 色を指定 */}
      <span className="i-lucide-cat bg-blue-500"></span>
      <span className="i-lucide-cat bg-red-500"></span>
      <span className="i-lucide-cat bg-orange-500"></span>
      <br/>
      {/* アニメーションを追加 */}
      <span className="i-lucide-cat animate-spin"></span>
      <span className="i-lucide-cat animate-bounce"></span>
    </main>
  );
}