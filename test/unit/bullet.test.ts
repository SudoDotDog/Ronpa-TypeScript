/**
 * @author WMXPY
 * @namespace Ronpa
 * @description Bullet
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Bullet } from '../../src';

describe('Given {Bullet} Class', (): void => {

    const chance: Chance.Chance = new Chance('ronpa-bullet');

    it('should be able to create instance', (): void => {

        const from: string = chance.string();
        const content: string = chance.string();
        const story: string = chance.string();

        const bullet = Bullet.create(from, content, story);

        expect(bullet).to.be.instanceOf(Bullet);
    });

    it('should be able to get reactions', (): void => {

        const from: string = chance.string();
        const content: string = chance.string();
        const story: string = chance.string();

        const bullet = Bullet.create(from, content, story);

        expect(bullet.reactions).to.be.deep.equal([]);
    });

    it('should be able to set values', (): void => {

        const from: string = chance.string();
        const content: string = chance.string();
        const story: string = chance.string();

        const bullet = Bullet.create(from, content, story);

        const reply: string = chance.string();
        const receiver: string = chance.string();

        bullet.setReply(reply);
        bullet.addReceiver(receiver);

        expect(bullet.record()).to.be.deep.equal({
            id: bullet.id,
            at: bullet.at,
            by: from,
            content,
            story,
            reply,
            to: [receiver],
        });
    });

    it('should be able to get extra', (): void => {

        const from: string = chance.string();
        const content: string = chance.string();
        const story: string = chance.string();

        const bullet = Bullet.create(from, content, story);

        const key: string = chance.string();
        const value: string = chance.string();
        bullet.setExtra(key, value);

        // tslint:disable-next-line: no-unused-expression
        expect(bullet.getExtra('test')).to.be.undefined;
        expect(bullet.getExtra(key)).to.be.equal(value);

        expect(bullet.record()).to.be.deep.equal({
            id: bullet.id,
            at: bullet.at,
            by: from,
            content,
            story,
            extras: {
                [key]: value,
            },
        });
    });
});
