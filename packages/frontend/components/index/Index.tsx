import IndexGradient from './hero/IndexHeroGradient'
import IndexHeroText from './hero/IndexHeroText'
import IndexHeroActions from './hero/IndexHeroActions'
export default function Index() {
  return (
    <div className="flex flex-col justify-center padding-main">
      <div className="relative flex flex-col gap-2 rounded-base bg-black text-white p-4 flex-grow overflow-hidden">
        <div className="relative z-10 py-40 flex flex-col items-center gap-4">
          <IndexHeroText />
          <IndexHeroActions />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <IndexGradient />
        </div>
      </div>
    </div>
  )
}
