import { Component } from "vue";

export interface ProjectComponentProps {
  title: string;
  description: string;
  imgSrc: string;
  imgPlacement: string;
  url?: string;
}

export interface IconTextButtonProps {
  text: string;
  iconSrc: string;
}
