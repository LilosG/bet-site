import { equipmentCategories, getEquipmentCategory } from '../lib/cms';

export type EquipmentCategory = (typeof equipmentCategories)[number];
export const EQUIPMENT_CATEGORIES = equipmentCategories;
export const getCategoryBySlug = getEquipmentCategory;
