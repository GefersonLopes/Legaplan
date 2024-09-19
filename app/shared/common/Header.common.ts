const today = new Date().toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})

const headerCommon = {
  brand: "FocalPoint",
  date: today,
  today: today.replace("-feira", ""),
  welcome: "Bem-vindo de volta, Marcus",
};

export default headerCommon;
