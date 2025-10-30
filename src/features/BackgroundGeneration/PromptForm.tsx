import { InputGroupButton } from '@/components/ui/input-group';

import { Button } from '@/components/ui/button';
import { InputGroup } from '@/components/ui/input-group';
import { InputGroupTextarea } from '@/components/ui/input-group';
import { InputGroupAddon } from '@/components/ui/input-group';
import { Undo2, Redo2 } from 'lucide-react';
import iconAi from './assets/icon-ai.svg';

type Props = {
  onSubmit: () => void;
};

export default function PromptForm({ onSubmit }: Props) {
  return (
    <div className="space-y-2 mb-10">
      <div className="text-sm font-medium">Background Idea</div>
      <div className="relative mb-6">
        <InputGroup className="rounded-2xl">
          <InputGroupTextarea
            className="min-h-38 p-4 focus-visible:border-none"
            placeholder="Describe your background..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton variant="ghost" className="text-xs">
              <img src={iconAi} alt="AI" className="size-4" />
              Regenerate
            </InputGroupButton>

            <InputGroupButton variant="ghost" className="ml-auto">
              <Undo2 className="size-5" />
            </InputGroupButton>
            <InputGroupButton variant="ghost">
              <Redo2 className="size-5" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <Button size="xl" className="w-full" onClick={onSubmit}>
        <img src={iconAi} alt="AI" className="size-4" />
        Generate BG for 1 credit
      </Button>
    </div>
  );
}
