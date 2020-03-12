import BSpline from './b-spline';

export interface IDrawConfig {
 context: any;
 canvas: any;
}

export default (configs: IDrawConfig[], containerSize: number) => {
    const degree = 2;
    const yStart = containerSize * 0.4;
    const pts = [[0, yStart]];
    let start = null;
    const leaf = null;
    const rose = null;
    const leafSize = 15;
    const flowerSize  = 0.5;
    const yFactor = 40;
    const xFactor = 20;
    configs.forEach(({ context, canvas }) => {
        context.globalCompositeOperation = 'destination-over';
        context.lineWidth = 1;
        window.requestAnimationFrame(
            getStep(context, canvas),
        );
    });


    function getStep(ctx, canv) {
        return function step(timestamp) {
            if (!start) start = timestamp;

            const progress = timestamp - start;
            const lastPoint = pts[pts.length - 1];
            const xx = Math.random() * xFactor;
            const yy = Math.random() * yFactor;

            putPoint(ctx, canv, lastPoint[0] + xx, yStart + yy, timestamp > 2000)

            if (progress < 2500) {
                window.requestAnimationFrame(step);
            }
        };
    }

    function putPoint(ctx, canv, x, y, shouldDrawFlowers) {
        pts.push([x,y]);
        drawSpline(ctx, canv, shouldDrawFlowers);
    }

    function drawSpline(ctx, canv, shouldDrawFlowers){
        ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.lineWidth += 0.001;
        // leafSize += 0.2
        //
        // if(pts.length == 0) {
        //     return;
        // }
        // for(var i = 0;i<pts.length;i++){
        //     ctx.beginPath();
        //
        //     if (berriesAt[i]) {
        //         if (shouldDrawFlowers) {
        //             drawImage(ctx, rose, pts[i][0], pts[i][1], flowerSize, flowerSize);
        //             // ctx.arc(pts[i][0],pts[i][1],flowerSize,0,Math.PI*2,false);
        //             ctx.fill();
        //             flowerSize += 0.04;
        //         }
        //     } else if (i % 2 === 0) {
        //         const angle = pts[i][1] < yStart + (yFactor / 2) ? 0 : 3;
        //         drawImage(ctx, leaf, pts[i][0], pts[i][1], leafSize, leafSize, angle);
        //         ctx.fill();
        //     }
        //     ctx.closePath();
        // }
        const spline = new BSpline(pts, degree, true);
        ctx.beginPath();
        let x;
        let y;
        let oldx = spline.calcAt(0)[0];
        let oldy = spline.calcAt(0)[1];
        for (let t = 0; t <= 1; t += 0.0001){
            ctx.moveTo(oldx, oldy);
            const interpol = spline.calcAt(t);
            x = interpol[0];
            y = interpol[1];
            ctx.lineTo(x,y);
            oldx = x;
            oldy = y;
        }
        ctx.stroke();
        ctx.closePath();
    }
};
