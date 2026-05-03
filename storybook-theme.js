// Can't use var(--color-*) because Storybook uses JS functions that expect explicit values
const colors = {
    body: '#181825',
    bodyMuted: '#888893',
    primary: '#845ec2',
    secondary: '#0ABFA0',
    light: 'ghostwhite',
    dark: '#35264E',
}

export const doubleeTheme = {
    brandTitle: '',
    brandImage: 'https://doublee.dev/logos/leesa-logo.svg',
    fontBase: "'Neue Montreal', 'Neue Helvetica', 'Helvetica', Arial, sans-serif",
    fontCode: "'Fira Code', ui-monospace",
    colorPrimary: colors.primary,
    colorSecondary: colors.primary,
    textColor: colors.body,
    textInverseColor: '#FFF',
    textMutedColor: colors.bodyMuted,
    appBg: colors.light,
    appBorderColor: "hsl(212 50% 30% / 0.15)",
    appBorderRadius: 4,
    appContentBg: "#FFFFFF",
    appHoverBg: colors.light,
    appPreviewBg: "#FFFFFF",
    barTextColor: colors.body,
    barHoverColor: colors.light,
    barSelectedColor: colors.primary,
    barBg: "#FFFFFF",
    buttonBg: colors.light,
    buttonBorder: "#C5C4CC",
    booleanBg: colors.light,
    booleanSelectedBg: "#FFFFFF",
    inputBg: "#FFFFFF",
    inputBorder: "#BEBED2",
    inputTextColor: colors.bodyMuted,
    inputBorderRadius: 4
}