import { Button } from '@/components/ui/button';
import Sidebar from '@/features/BackgroundGeneration/Sidebar';
import { useBackgroundGenerator } from '@/features/BackgroundGeneration/hooks/useBackgroundGenerator';

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
      <Sidebar />
    </div>
  );
}

export default HomePage;
