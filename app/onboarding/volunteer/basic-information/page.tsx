/* eslint-disable react/no-unescaped-entities */
'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
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
  Input,
  InputContainer,
  Label,
  Title,
} from '../../styles';
import { RedAsterisk } from './styles';

export default function Onboarding() {
  const router = useRouter();
  const onboardingContext = useContext(OnboardingContext);

  if (!onboardingContext) return null;

  const { generalInfo, setGeneralInfo, role } = onboardingContext;

  let progress = 0;
  // number of steps in each onboarding
  if (role.isHost && role.isPerformer) {
    progress = 100 / 7;
  } else if (role.isHost) {
    progress = 100 / 5;
  } else {
    progress = 100 / 6;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    const formattedPhoneNumber = generalInfo.phoneNumber;
    if (
      !generalInfo.firstName ||
      !generalInfo.lastName ||
      !formattedPhoneNumber
    ) {
      return;
    }

    setGeneralInfo({ ...generalInfo, phoneNumber: formattedPhoneNumber });
    router.push('/onboarding/volunteer/show-preference');
  };

  const handleBack = () => {
    router.push('/onboarding/volunteer/role-selection');
  };

  return (
    <Background>
      <InlineContainer>
        <BackButton onClick={handleBack}>
          <Image src={Back} alt="Back icon" />
        </BackButton>
        <Title $fontWeight={500}>Can you tell us a bit about yourself?</Title>
        <ProgressBar from={progress} to={progress} />
        <Container>
          <InputContainer>
            <Label>
              First Name <RedAsterisk>*</RedAsterisk>
            </Label>
            <Input
              name="firstName"
              placeholder="Jane"
              value={generalInfo.firstName}
              onChange={handleChange}
            />
          </InputContainer>

          <InputContainer>
            <Label>
              Last Name <RedAsterisk>*</RedAsterisk>
            </Label>
            <Input
              name="lastName"
              placeholder="Doe"
              value={generalInfo.lastName}
              onChange={handleChange}
            />
          </InputContainer>

          <InputContainer>
            <div>
              <Label>
                Phone Number <RedAsterisk>*</RedAsterisk>
              </Label>
            </div>
            <Input
              name="phoneNumber"
              placeholder="(987) 654-3210"
              value={generalInfo.phoneNumber}
              onChange={handleChange}
            />
          </InputContainer>

          <InputContainer>
            <Label>Social Media / Demo Link</Label>
            <Input
              name="socialMedia"
              placeholder="Instagram: @janedoe"
              value={generalInfo.socialMedia}
              onChange={handleChange}
            />
          </InputContainer>
        </Container>

        <ButtonContainer>
          <FixedFooter />
          <Button
            position="sticky"
            onClick={handleSubmit}
            disabled={
              !generalInfo.firstName ||
              !generalInfo.lastName ||
              !generalInfo.phoneNumber
            }
          >
            <ContinueText>Continue</ContinueText>
          </Button>
        </ButtonContainer>
      </InlineContainer>
    </Background>
  );
}
