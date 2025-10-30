import { Button } from '@/components/ui/button';
import {
  BackgroundGenerationSidebar,
  useBackgroundGenerator,
} from '@/features/BackgroundGeneration';

function HomePage() {
  const { setOpen } = useBackgroundGenerator();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-5xl">✨</div>
        <h1 className="text-4xl font-semibold tracking-tight">Zeely Task</h1>
        <div>
          <Button onClick={() => setOpen(true)} className="px-6">
            Change background
          </Button>
        </div>
      </div>
      <BackgroundGenerationSidebar />
    </div>
  );
}

export default HomePage;
