'use client';

import NextImage from 'next/image';
import styled from 'styled-components';
import COLORS from '@/styles/colors';
import { H6, P } from '@/styles/text';

export const PopUpDiv = styled.div<{ type: string }>`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  background-color: ${({ type }) =>
    type === 'edited'
      ? COLORS.lilac4
      : type === 'error'
        ? COLORS.rose11
        : '#d4edda'};
  color: ${COLORS.gray12};
  padding: 0.625rem 1rem;
  border-radius: 5px;
  box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.08);
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const PopUpButton = styled.button`
  background: none;
  border: none;
  color: ${COLORS.gray10};
  fontweight: bold;
  cursor: pointer;
`;

export const Page = styled.main<{ $menuExpanded: boolean }>`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin-left: ${({ $menuExpanded }) =>
      $menuExpanded ? '10%' : '0'}; /* Fixed margin for the expanded menu */
    transition: margin-left 0.3s ease; /* Smooth transition */
  }
`;

export const AllAvailabilitiesHolder = styled.main`
  display: flex;
  width: 28.75%;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.main`
  display: flex;
  margin-top: 4.43rem;
  margin-bottom: 2.62rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const YearText = styled(H6)`
  margin-bottom: 1.5rem;
`;

export const AddImage = styled(NextImage)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const message = styled(P)`
  text-align: center;
  margin-top: 5.75rem;
`;
