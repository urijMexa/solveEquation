"use strict";

/**
 * Функция для решения квадратного уравнения ax² + bx + c = 0
 * @param {number} a - Коэффициент при x²
 * @param {number} b - Коэффициент при x
 * @param {number} c - Свободный член
 * @returns {Array<number>} - Массив корней уравнения
 */
function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        // Нет корней
        return [];
    } else if (discriminant === 0) {
        // Один корень
        const root = -b / (2 * a);
        return [root];
    } else {
        // Два корня
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2];
    }
}

// Пример использования
const a = 1;
const b = -3;
const c = 2;
const roots = solveEquation(a, b, c);
console.log(`Корни уравнения: ${roots}`);
