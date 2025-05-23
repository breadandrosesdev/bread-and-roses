'use client';

import NextImage from 'next/image';
import styled from 'styled-components';
import COLORS from '@/styles/colors';
import { Sans } from '@/styles/fonts';
import { H3, H6, P } from '@/styles/text';

export const SearchBar = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border-radius: 100rem;
  background-color: ${COLORS.bread2};
  box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.08);
  margin-top: 1.25rem;
`;

export const SearchInput = styled.input`
  all: unset;
  width: 100%;
  font-weight: 400;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Page = styled.main<{ $menuExpanded: boolean }>`
  display: flex;
  min-width: 90%;
  min-height: 100vh;
  justify-content: center;
  margin-left: ${({ $menuExpanded }) =>
    $menuExpanded ? '15%' : '0px'}; /* Adjust margin based on menu expansion */
  transition: margin-left 0.3s ease; /* Smooth transition for menu toggle */
`;

export const Label = styled(H6)`
  font-weight: 500;
`;

export const Found = styled(P)`
  font-weight: 500;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscoverHolder = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  box-sizing: border-box;
`;

export const Discover = styled(H3)`
  padding-top: 1.5rem;
`;

export const DiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DiscoverCardContainer = styled.div<{ $search: boolean }>`
  display: flex;
  flex-direction: ${({ $search }) => ($search ? 'column' : 'row')};
  gap: 1.688rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  white-space: normal;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const Icon = styled(NextImage)`
  width: 20px;
  height: 20px;
`;

export const SearchXIcon = styled(NextImage)`
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(0%) sepia(3%) saturate(6166%)
    hue-rotate(346deg) brightness(96%) contrast(75%);
`;
export const Button = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  background: transparent;
  z-index: 999;
  padding: 0;
`;

export const XIcon = styled(NextImage)`
  width: 12px;
  height: 12px;
`;

export const FilterWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 1rem;
  margin-left: 0.5rem;
`;

export const FilterTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;
  gap: 0.5rem;
  width: 100%;
`;

export const FilterTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  background-color: ${COLORS.gray3};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
`;

export const FilterMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0.875rem;
  z-index: 999;
  background-color: ${COLORS.bread2};
  overflow-y: auto;
`;

export const NoMatchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  gap: 0.5rem;
`;

export const NoMatchText = styled(P)`
  color: ${COLORS.gray9};
  font-weight: 500;
`;

export const ShowAllText = styled(P)`
  display: flex;
  font-weight: 500;
  color: #755392;
  justify-content: flex-end;
  width: 100%;
  font-weight: 400;
`;

export const ResetButton = styled.button`
  display: flex;
  width: 79px;
  height: 23px;
  cursor: pointer;
  padding: 8px 12px;
  margin-right: 0.25rem;
  background-color: ${COLORS.bread2};
  justify-content: center;
  align-items: center;
  font-family: ${Sans.style.fontFamily};
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid ${COLORS.pomegranate12};
`;
