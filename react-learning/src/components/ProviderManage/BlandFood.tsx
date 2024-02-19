import { SpicyStateCtx } from '@components/ProviderManage/SpicyProvider';
import { useText } from '@hooks';

function BlandFood() {
  const spice: string = useText(SpicyStateCtx);
  return <>{spice}</>;
}

export default BlandFood;
