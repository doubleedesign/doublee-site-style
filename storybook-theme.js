// Can't use var(--color-*) because Storybook uses JS functions that expect explicit values
const colors = {
    body: '#181825',
    bodyMuted: '#888893',
    primary: '#845ec2',
    primaryMuted: '#AA9CC8',
    secondary: '#0ABFA0',
    light: '#EDE7F6',
    dark: '#35264E'
}

export const doubleeTheme = {
    brandTitle: '',
    brandImage: null, // TODO: Create default logo
    fontBase: "'Neue Montreal', 'Neue Helvetica', 'Helvetica', Arial, sans-serif",
    fontCode: "'Fira Code', ui-monospace",
    colorPrimary: colors.primary,
    colorSecondary: colors.primary,
    textColor: colors.body,
    textInverseColor: '#FFF',
    textMutedColor: colors.bodyMuted,
    barTextColor: colors.body,
    barHoverColor: colors.primaryMuted,
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