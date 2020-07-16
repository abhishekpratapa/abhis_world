const enumValue = (name) => Object.freeze({toString: () => name});

export default Object.freeze({
    CALENDAR : enumValue("MenuType.CALENDAR"),
	PROJECTS : enumValue("MenuType.PROJECTS"),
	BLOG : enumValue("MenuType.BLOG"),
	LIGHTBULB : enumValue("MenuType.LIGHTBULB"),
	BOOKS : enumValue("MenuType.BOOKS"),
	PLANTS : enumValue("MenuType.PLANTS")
});