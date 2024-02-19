import SpicyProvider from '@components/ProviderManage/SpicyProvider';
import BlandFood from '@components/ProviderManage/BlandFood';
import SpiceButtons from '@components/ProviderManage/SpiceButtons';

function ProviderManage() {
  return (
    <SpicyProvider>
      <div>
        <BlandFood />
        <SpiceButtons />
      </div>
    </SpicyProvider>
  );
}

export default ProviderManage;
