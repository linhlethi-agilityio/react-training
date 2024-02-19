import { useText } from '@hooks';
import { SpicyApiCtx } from '@components/ProviderManage/SpicyProvider';

function SpiceButtons() {
  const { sportySpice, gingerSpice } = useText(SpicyApiCtx);

  return (
    <>
      <button type='button' onClick={sportySpice}>
        Sporty
      </button>
      <button type='button' onClick={gingerSpice}>
        Ginger
      </button>
    </>
  );
}

export default SpiceButtons;
