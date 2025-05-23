'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import InputDropdown from '@/components/InputDropdown/InputDropdown';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Back from '@/public/images/back.svg';
import { OnboardingContext } from '@/utils/onboardingContext';
import {
  BackButton,
  Background,
  Button,
  ButtonContainer,
  Container,
  ContinueText,
  FixedFooter,
  Image,
  InlineContainer,
  Title,
} from '../../styles';

const performanceTypeOptions = new Set([
  'Music',
  'Dance',
  'Poetry',
  'Clowning',
  'Juggling',
  'Comedy',
  'Magic',
  'Storytelling',
  'Bubbles',
  'Puppetry',
  'Other',
]);

const genreOptions = new Set([
  'A Cappella',
  'Bluegrass',
  'Blues',
  "Children's songs",
  'Classical',
  'Country',
  'Folk',
  'Jazz',
  'Pop',
  'R&B',
  'Rock',
  'Standards',
  'Other',
]);

const performerTypeOptions = new Set([
  'Solo',
  'Duo',
  'Trio',
  'Quartet',
  'Five or more',
  'Other',
]);

export default function Onboarding() {
  const router = useRouter();
  const onboardingContext = useContext(OnboardingContext);

  if (!onboardingContext) return null;

  const { preferences, setPreferences, role } = onboardingContext;

  let progress = 0;
  // number of steps in each onboarding
  if (role.isHost && role.isPerformer) {
    progress = (3 * 100) / 7;
  } else {
    progress = (3 * 100) / 6;
  }

  const handlePerformanceTypeChange = (selectedOptions: Set<string>) => {
    const selectedArray = Array.from(selectedOptions);
    setPreferences({ ...preferences, performanceType: selectedArray });
  };

  const handleGenreChange = (selectedOptions: Set<string>) => {
    const selectedArray = Array.from(selectedOptions);
    setPreferences({ ...preferences, genre: selectedArray });
  };

  const handlePerformerTypeChange = (selectedOptions: Set<string>) => {
    const selectedArray = Array.from(selectedOptions);
    setPreferences({ ...preferences, performerType: selectedArray });
  };

  const handleSubmit = async () => {
    router.push('/onboarding/volunteer/equipment');
  };

  const handleBack = () => {
    router.push('/onboarding/volunteer/show-preference');
  };

  return (
    <Background>
      <InlineContainer>
        <BackButton onClick={handleBack}>
          <Image src={Back} alt="Back icon" />
        </BackButton>
        <Title $fontWeight={500}>
          What would you like to
          <br />
          perform?
        </Title>
        <ProgressBar from={progress} to={progress} />
        <Container>
          <InputDropdown
            label="Type of Performance"
            placeholder="Type to filter..."
            multi
            onChange={handlePerformanceTypeChange}
            options={performanceTypeOptions}
            required
            value={new Set(preferences.performanceType)}
          />
          {preferences.performanceType.includes('Music') && (
            <InputDropdown
              label="Performance Genre"
              placeholder="Type to filter..."
              multi
              onChange={handleGenreChange}
              options={genreOptions}
              value={new Set(preferences.genre)}
              note="Note: Only for musical performances"
            />
          )}
          <InputDropdown
            label="Group Size"
            placeholder="Type to filter..."
            multi
            onChange={handlePerformerTypeChange}
            options={performerTypeOptions}
            value={new Set(preferences.performerType)}
          />
        </Container>

        <ButtonContainer>
          <FixedFooter />
          <Button
            onClick={handleSubmit}
            position="sticky"
            disabled={!preferences.performanceType.length}
          >
            <ContinueText>Continue</ContinueText>
          </Button>
        </ButtonContainer>
      </InlineContainer>
    </Background>
  );
}
