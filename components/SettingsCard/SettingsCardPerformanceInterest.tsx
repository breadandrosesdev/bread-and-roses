import React, { useState } from 'react';
import { updateVolunteerPreferences } from '@/api/supabase/queries/volunteers';
import InputDropdown from '@/components/InputDropdown/InputDropdown';
import Edit from '@/public/images/edit.svg';
import COLORS from '@/styles/colors';
import { H5, P } from '@/styles/text';
import { UserPreferences } from '@/utils/settingsInfo';
import * as styles from './styles';

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

export default function SettingCardPerformanceInterest({
  genres,
  performance_types,
  group_size,
  userPrefs,
  editPrefs,
  setEditPrefs,
  setUserPrefs,
  userId,
}: {
  genres: string[];
  performance_types: string[];
  group_size: string[];
  userPrefs: UserPreferences;
  editPrefs: UserPreferences;
  setUserPrefs: React.Dispatch<React.SetStateAction<UserPreferences>>;
  setEditPrefs: React.Dispatch<React.SetStateAction<UserPreferences>>;
  userId: string;
}) {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const updateGenres = (value: string[]) => {
    setEditPrefs(prev => ({
      ...prev,
      genre: value,
    }));
  };

  const updatePerformanceTypes = (value: string[]) => {
    setEditPrefs(prev => ({
      ...prev,
      performance_type: value,
    }));
  };

  const updateGroupSize = (value: string[]) => {
    setEditPrefs(prev => ({
      ...prev,
      performer_type: value,
    }));
  };

  const handleCancel = () => {
    //setGenresArray(genres);
    //setPerformanceTypesArray(performance_types);
    updateGenres(genres);
    updatePerformanceTypes(performance_types);
    updateGroupSize(group_size);
    setIsEditable(!isEditable);
  };

  const handleSave = async () => {
    await updateVolunteerPreferences(userId, userPrefs, editPrefs);
    setUserPrefs(editPrefs);
    setIsEditable(!isEditable);
  };

  return (
    <styles.AvailabilityContainer>
      <styles.AvailabilityHeader>
        <styles.AvailabilityTitle>
          <H5 $fontWeight="500" $color={COLORS.bread1} $align="left">
            Performance Interest
          </H5>
        </styles.AvailabilityTitle>
        <styles.EditButton onClick={() => setIsEditable(!isEditable)}>
          <styles.EditIcon src={Edit} alt="Edit" />
        </styles.EditButton>
      </styles.AvailabilityHeader>
      <styles.Content>
        <div>
          <styles.SubHeader>
            <styles.SettingDetail>
              <P $fontWeight="500" $color={COLORS.gray12} $align="left">
                Type of Act
              </P>
              <styles.SettingListedItems>
                {isEditable ? (
                  <InputDropdown
                    label=""
                    placeholder="Select performance type"
                    multi
                    options={performanceTypeOptions}
                    value={new Set(editPrefs.performance_type)}
                    onChange={selected =>
                      updatePerformanceTypes(Array.from(selected))
                    }
                  />
                ) : (
                  <styles.NonEditableDisplay>
                    {performance_types.map(performance_type => {
                      return (
                        <li key={performance_type}>
                          <styles.TruncatedText
                            $fontWeight="400"
                            $color={COLORS.gray11}
                            $align="left"
                          >
                            {performance_type}
                          </styles.TruncatedText>
                        </li>
                      );
                    })}
                  </styles.NonEditableDisplay>
                )}
              </styles.SettingListedItems>
            </styles.SettingDetail>
            <styles.SettingDetail>
              <P $fontWeight="500" $color={COLORS.gray12} $align="left">
                Genre (if music)
              </P>
              <styles.SettingListedItems>
                {isEditable ? (
                  <InputDropdown
                    label=""
                    placeholder="Select genre"
                    multi
                    options={genreOptions}
                    value={new Set(editPrefs.genre)}
                    onChange={selected => updateGenres(Array.from(selected))}
                  />
                ) : (
                  <styles.NonEditableDisplay>
                    {genres.map(genre => {
                      return (
                        <li key={genre}>
                          <styles.TruncatedText
                            $fontWeight="400"
                            $color={COLORS.gray11}
                            $align="left"
                          >
                            {genre}
                          </styles.TruncatedText>
                        </li>
                      );
                    })}
                  </styles.NonEditableDisplay>
                )}
              </styles.SettingListedItems>
            </styles.SettingDetail>
            <styles.SettingDetail>
              <P $fontWeight="500" $color={COLORS.gray12} $align="left">
                Group Size
              </P>
              <styles.SettingListedItems>
                {isEditable ? (
                  <InputDropdown
                    label=""
                    placeholder="Select group size"
                    multi
                    options={performerTypeOptions}
                    value={new Set(editPrefs.performer_type)}
                    onChange={selected => updateGroupSize(Array.from(selected))}
                  />
                ) : (
                  <styles.NonEditableDisplay>
                    {group_size.map(size => {
                      return (
                        <li key={size}>
                          <styles.TruncatedText
                            $fontWeight="400"
                            $color={COLORS.gray11}
                            $align="left"
                          >
                            {size}
                          </styles.TruncatedText>
                        </li>
                      );
                    })}
                  </styles.NonEditableDisplay>
                )}
              </styles.SettingListedItems>
            </styles.SettingDetail>
          </styles.SubHeader>
          {isEditable ? (
            <styles.ButtonContainer>
              <styles.CancelButton onClick={handleCancel}>
                Cancel
              </styles.CancelButton>
              <styles.SaveButton onClick={handleSave}>Save</styles.SaveButton>
            </styles.ButtonContainer>
          ) : (
            <div></div>
          )}
        </div>
      </styles.Content>
    </styles.AvailabilityContainer>
  );
}
