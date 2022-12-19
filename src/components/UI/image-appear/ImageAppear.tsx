import gsap from 'gsap';
import React, { FC, useLayoutEffect } from 'react';
import st from './ImageAppear.module.scss';

const ImageAppear: FC = () => {
	useLayoutEffect(() => {
		[].forEach.call(document.getElementsByClassName(st.fx), fx);
	});


	const fx = async (el) => {
		const img = el.querySelector('img')
		const img_ratio = await get_img_ratio(img)

		el.style.setProperty('--img-ratio', img_ratio)
		el.style.setProperty('--img-src', `url(${img.src})`)

		img.style.setProperty('--display', 'none')

		const sx = 4
		const sy = Math.ceil(sx * img_ratio) * 2
		const verts = gen_verts(sx, sy)
		const cells = []

		for (let i = 0; i < sy; ++i) {
			cells[i] = []
			for (let j = 0; j < sx; ++j) {
				const v0 = verts[i][j]
				const v1 = verts[i + 1][j]
				const v2 = verts[i + 1][j + 1]
				const c0 = gen_cell(v0, v1, v2)
				el.append(c0)
				cells[i].push(c0)

				const v3 = verts[i][j]
				const v4 = verts[i + 1][j + 1]
				const v5 = verts[i][j + 1]
				const c1 = gen_cell(v3, v4, v5)
				el.append(c1)
				cells[i].push(c1)
			}
		}

		gsap.from(cells, {
			opacity: 0,
			filter: 'blur(10px)',
			translateY: -100,
			translateZ: () => 100 + Math.random() * 100,
			ease: 'bounce',
			stagger: {
				from: 'end',
				amount: 2,
				repeat: 2, yoyo: true
			},
			onComplete: () => {
				img.style.setProperty('--display', '')
				cells.forEach((r) => r.forEach(c => c.remove()))
			}
		})
	}

	const get_img_ratio = (img): Promise<number> => {
		return new Promise(res => {
			if (img.complete) {
				res(img.naturalWidth / img.naturalHeight)
			} else {
				img.onload = () => res(img.naturalWidth / img.naturalHeight)
			}
		})
	}

	function calc_bbox(v0, v1, v2) {
		const left = Math.min(v0.x, v1.x, v2.x)
		const right = Math.max(v0.x, v1.x, v2.x)
		const top = Math.min(v0.y, v1.y, v2.y)
		const bottom = Math.max(v0.y, v1.y, v2.y)
		return { top, right, bottom, left }
	}

	const gen_cell = (v0, v1, v2) => {
		const cell = document.createElement('div')
		cell.classList.add(st.cell)

		const { top, right, bottom, left } = calc_bbox(v0, v1, v2)
		const width = right - left;
		const height = bottom - top;

		cell.style.setProperty('--width', `${width}`)
		cell.style.setProperty('--height', `${height}`)
		cell.style.setProperty('--left', `${left}`)
		cell.style.setProperty('--top', `${top}`)
		cell.style.setProperty('--x0', `${(v0.x - left) / width}`)
		cell.style.setProperty('--y0', `${(v0.y - top) / height}`)
		cell.style.setProperty('--x1', `${(v1.x - left) / width}`)
		cell.style.setProperty('--y1', `${(v1.y - top) / height}`)
		cell.style.setProperty('--x2', `${(v2.x - left) / width}`)
		cell.style.setProperty('--y2', `${(v2.y - top) / height}`)

		return cell
	}

	const rand = (a: number, b: number): number => {
		return a + (b - a) * Math.random()
	}

	const gen_verts = (sx: number, sy: number): number[] => {
		const verts = []
		for (let i = 0; i <= sy; ++i) {
			verts[i] = []
			for (let j = 0; j <= sx; ++j) {
				verts[i][j] = { x: j / sx, y: i / sy }
				if (i != 0 && i != sy && j != 0 && j != sx) {
					verts[i][j].x += rand(-1, 1) * (0.5 / sx)
					verts[i][j].y += rand(-1, 1) * (0.5 / sy)
				}
			}
		}
		return verts
	}

	return (
		<div className={st.fx}>
			<img src="/assets/images/pages/service-1.jpg" />
		</div>
	)
}

export default ImageAppear;