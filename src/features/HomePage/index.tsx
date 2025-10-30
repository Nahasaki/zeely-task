import { Button } from '@/components/ui/button';
import Sidebar from '@/features/BackgroundGeneration/Sidebar';
import { useBackgroundGenerator } from '@/features/BackgroundGeneration/hooks/useBackgroundGenerator';

function HomePage() {
  const { setOpen } = useBackgroundGenerator();
  return (
    <>
      <h1 className="text-4xl">Zeely Task</h1>
      <Button onClick={() => setOpen(true)}>Change background</Button>
      <Sidebar />
    </>
  );
}

export default HomePage;
